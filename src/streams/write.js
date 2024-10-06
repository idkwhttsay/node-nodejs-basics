import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToWriteFile = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(pathToWriteFile);

  process.stdin.on("data", (chunk) => {
    const input = chunk.toString().trim();
    if (input === ".end") {
      writeStream.end();
    } else {
      writeStream.write(`${input}\n`);
    }
  });

  writeStream.on("finish", () => {
    process.exit();
  });

  writeStream.on("error", (error) => {
    console.log(error.message);
  });
};

await write();
