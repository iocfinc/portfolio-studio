import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const distDir = join(repoRoot, "dist");
const pagesRepo = resolve(repoRoot, "..", "iocfinc.github.io");

const preservedRoutes = [
  "/archive/",
  "/archive/legacy-2019/",
  "/games/concentration/",
  "/css/",
  "/js/",
  "/fonts/",
  "/images/",
  "/inc/",
];

async function assertDirectory(path, label) {
  const info = await stat(path);
  if (!info.isDirectory()) {
    throw new Error(`${label} is not a directory: ${path}`);
  }
}

await assertDirectory(distDir, "Astro dist");
await assertDirectory(pagesRepo, "GitHub Pages repo");
await mkdir(pagesRepo, { recursive: true });

const entries = await readdir(distDir);
const conflictCopyPattern = / \d+\.[^.]+$/;

const conflictCopies = entries.filter((entry) =>
  conflictCopyPattern.test(entry),
);
if (conflictCopies.length > 0) {
  throw new Error(
    `Astro dist contains conflict-copy files: ${conflictCopies.join(", ")}`,
  );
}

const pagesRootEntries = await readdir(pagesRepo);
for (const entry of pagesRootEntries) {
  if (/^index \d+\.html$/.test(entry) || /^favicon \d+\.svg$/.test(entry)) {
    await rm(join(pagesRepo, entry), { force: true });
  }
}

for (const entry of entries) {
  await rm(join(pagesRepo, entry), { force: true, recursive: true });
  await cp(join(distDir, entry), join(pagesRepo, entry), {
    force: true,
    recursive: true,
  });
}

console.log(
  `Pruned and staged ${entries.length} source-owned generated entries into ${pagesRepo}`,
);
console.log(`Preserved public exceptions: ${preservedRoutes.join(", ")}`);
