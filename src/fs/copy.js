import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToOriginalDir = path.join(__dirname, "files");
  const pathToCopiedDir = path.join(__dirname, "files_copy");

  if (fs.existsSync(pathToCopiedDir) || !fs.existsSync(pathToOriginalDir)) {
    throw new Error("FS operation failed");
  }

  fs.mkdirSync(pathToCopiedDir);
  const files = fs.readdirSync(pathToOriginalDir);

  files.forEach((file) => {
    const originalFile = path.join(pathToOriginalDir, file);
    const copiedFile = path.join(pathToCopiedDir, file);
    fs.copyFileSync(originalFile, copiedFile);
  });
};

await copy();
