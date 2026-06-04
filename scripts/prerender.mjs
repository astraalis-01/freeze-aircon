import puppeteer from "puppeteer";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
const BASE = `http://127.0.0.1:${PORT}`;

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/ac",
  "/services/refrigerator",
  "/services/washing-machine",
  "/services/heater",
  "/ac-services-kolathur",
  "/contact",
];

function routeToOutput(route) {
  if (route === "/") return join(dist, "index.html");
  return join(dist, ...route.replace(/^\//, "").split("/"), "index.html");
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt++) {
    try {
      const response = await fetch(`${BASE}/`);
      if (response.ok) return;
    } catch {
      // preview still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Preview server did not start on ${BASE}`);
}

function startPreview() {
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  return spawn(
    command,
    ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
    { cwd: root, stdio: "pipe", shell: process.platform === "win32" }
  );
}

async function prerender() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("SKIP_PRERENDER=1 — skipping prerender step.");
    return;
  }

  const preview = startPreview();

  try {
    await waitForServer();
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    for (const route of ROUTES) {
      const url = `${BASE}${route}`;
      console.log(`Prerendering ${url}`);
      await page.goto(url, { waitUntil: "networkidle0", timeout: 90_000 });
      await page.waitForSelector("#root h1, #root h2", { timeout: 15_000 });
      await new Promise((resolve) => setTimeout(resolve, 400));
      const html = await page.content();
      const output = routeToOutput(route);
      mkdirSync(dirname(output), { recursive: true });
      writeFileSync(output, html, "utf8");
      console.log(`  saved ${output}`);
    }

    await browser.close();
    console.log(`Prerendered ${ROUTES.length} routes.`);
  } finally {
    preview.kill("SIGTERM");
  }
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
