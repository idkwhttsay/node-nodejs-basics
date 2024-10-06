import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const remove = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

  if (!fs.existsSync(pathToFileToRemove)) {
    throw new Error("FS operations failed");
  }

  fs.rmSync(pathToFileToRemove);
};

await remove();
