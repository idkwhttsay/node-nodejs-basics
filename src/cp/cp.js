import { fileURLToPath } from "url";
import path from "path";
import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToScriptFile = path.join(__dirname, "files", "script.js");

  const cp = fork(pathToScriptFile, args);

  cp.on("message", (message) => {
    console.log(`Received from child process: ${message}`);
  });

  cp.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1, arg2, arg3"]);
