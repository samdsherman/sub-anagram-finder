import readline from "readline";
import findSubAnagrams from "./findSubAnagrams";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptForString = async () => {
  return new Promise<string>((resolve) => {
    readlineInterface.question(
      "Enter a string to find sub-anagrams for: ",
      (str) => {
        resolve(str);
      }
    );
  });
};

// this loop needs to be inside an async function so we can use await
const main = async () => {
  while (true) {
    const str = await promptForString();
    console.log(findSubAnagrams(str));
  }
};

main();
