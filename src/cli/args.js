const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);

  const filteredArgs = args
    .filter((name, index) => index % 2 === 0)
    .map((name, index) => `${name.slice(2)} is ${args[index * 2 + 1]}`)
    .join(", ");

  console.log(filteredArgs);
};

parseArgs();
