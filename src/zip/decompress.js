import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import * as zlib from "node:zlib";

// Compress me!

const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToFileToDecompress = path.join(__dirname, "files", "archive.gz");

  const pathToDecompressedFile = path.join(
    __dirname,
    "files",
    "fileToCompress.txt",
  );

  const readStream = fs.createReadStream(pathToFileToDecompress);
  const writeStream = fs.createWriteStream(pathToDecompressedFile);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
