import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const distIndex = join("dist", "index.html");
const dist404 = join("dist", "404.html");
const public404 = join("public", "404.html");

if (existsSync(public404)) {
  copyFileSync(public404, dist404);
} else if (existsSync(distIndex)) {
  copyFileSync(distIndex, dist404);
}
