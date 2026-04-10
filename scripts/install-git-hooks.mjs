import { spawnSync } from "node:child_process";

const setHooksPath = spawnSync(
  "git",
  ["config", "core.hooksPath", ".githooks"],
  {
    encoding: "utf8",
    shell: false,
  },
);

if (setHooksPath.status !== 0) {
  process.stderr.write(
    setHooksPath.stderr || "Failed to configure git hooks path.\n",
  );
  process.exit(setHooksPath.status ?? 1);
}

process.stdout.write("Configured git hooks path to .githooks\n");
