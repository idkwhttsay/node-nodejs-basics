import { fileURLToPath } from "url";
import path from "path";
import * as zlib from "node:zlib";
import fs from "fs";

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFileToCompress = path.join(
    __dirname,
    "files",
    "fileToCompress.txt",
  );

  const pathToCompressedFile = path.join(__dirname, "files", "archive.gz");

  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(pathToFileToCompress);
  const writeStream = fs.createWriteStream(pathToCompressedFile);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
