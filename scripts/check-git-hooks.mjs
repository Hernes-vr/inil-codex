import { spawnSync } from "node:child_process";

const result = spawnSync("git", ["config", "--get", "core.hooksPath"], {
  encoding: "utf8",
  shell: false,
});

if (result.status !== 0) {
  process.stderr.write(result.stderr || "Failed to read git hooks path.\n");
  process.exit(result.status ?? 1);
}

const hooksPath = result.stdout.trim();

if (hooksPath !== ".githooks") {
  process.stderr.write(
    `Git hooks path is '${hooksPath || "(unset)"}'. Expected '.githooks'.\n`,
  );
  process.exit(1);
}

process.stdout.write("Git hooks path is configured to .githooks\n");
