import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  // Write your code here
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToHashFile = path.join(
      __dirname,
      "files",
      "fileToCalculateHashFor.txt",
    );

    const hash = crypto.createHash("sha256");
    const readStream = fs.createReadStream(pathToHashFile);

    readStream.pipe(hash).on("finish", () => {
      console.log(`SHA256 of a file: ${hash.digest("hex")}`);
    });
  } catch (error) {
    console.error(`Error occurred while calculating hash: ${error.message}`);
  }
};

await calculateHash();
