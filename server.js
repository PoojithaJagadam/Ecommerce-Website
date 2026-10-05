import { spawn } from "node:child_process";

const child = spawn(
  process.execPath,
  ["--import", "tsx/esm", "server.ts"],
  {
    stdio: "inherit",
    env: process.env,
  }
);

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
