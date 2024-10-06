import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFileToRead = path.join(__dirname, "files", "fileToRead.txt");

  if (!fs.existsSync(pathToFileToRead)) {
    throw new Error("FS operation failed");
  }

  const fileToReadContents = fs.readFileSync(pathToFileToRead, "utf8");
  console.log(fileToReadContents);
};

await read();
