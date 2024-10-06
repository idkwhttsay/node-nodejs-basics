import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToReadFile = path.join(__dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(pathToReadFile);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    process.stdout.write("\n");
  });

  readStream.on("error", (error) => {
    console.log(error.message);
  });
};

await read();
