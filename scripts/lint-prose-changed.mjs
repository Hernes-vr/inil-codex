import { spawnSync } from "node:child_process";

const changed = spawnSync(
  "git",
  ["diff", "--name-only", "--diff-filter=ACMRTUXB", "HEAD"],
  {
    encoding: "utf8",
    shell: false,
  },
);

if (changed.status !== 0) {
  process.stderr.write(changed.stderr || "Failed to read changed files from git.\n");
  process.exit(changed.status ?? 1);
}

const proseFiles = changed.stdout
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((file) => file.endsWith(".html"));

if (proseFiles.length === 0) {
  process.stdout.write("No changed prose files to lint.\n");
  process.exit(0);
}

const run = spawnSync("npx", ["textlint", ...proseFiles], {
  stdio: "inherit",
  shell: true,
});

process.exit(run.status ?? 1);
