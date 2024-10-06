import { fileURLToPath } from "url";
import path from "path";
import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reverseChunk = chunk.toString().split("").reverse().join("");
      callback(null, `${reverseChunk}\n`);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
