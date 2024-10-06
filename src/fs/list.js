import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToDir = path.join(__dirname, "files");

  if (!fs.existsSync(pathToDir)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(pathToDir);
  files.forEach((file) => {
    console.log(path.basename(file));
  });
};

await list();
