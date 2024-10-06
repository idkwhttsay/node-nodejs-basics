import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const create = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToNewFile = path.join(__dirname, "files", "fresh.txt");

  if (fs.existsSync(pathToNewFile)) {
    throw new Error("Fs operation failed");
  }

  await fs.writeFileSync(pathToNewFile, "I am fresh and young", "utf8");
  console.log("File created!");
};

await create();
