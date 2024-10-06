import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const rename = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFileToRename = path.join(__dirname, "files", "wrongFilename.txt");
  const pathToRenamedFile = path.join(__dirname, "files", "properFilename.md");

  if (!fs.existsSync(pathToFileToRename) || fs.existsSync(pathToRenamedFile)) {
    throw new Error("DS operation failed");
  }

  fs.renameSync(pathToFileToRename, pathToRenamedFile);
};

await rename();
