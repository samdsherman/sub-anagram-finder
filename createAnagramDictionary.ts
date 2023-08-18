import fs from "fs";
import { AnagramDictionary, getAnagramSignature } from "./util";
const wordList: string[] = require("./wordList.json");

const anagramGroups: AnagramDictionary = {};

// organize all the words into anagram groups (e.g., shoe and hose are equivalent)
wordList.forEach((word) => {
  const signature = getAnagramSignature(word);
  if (!anagramGroups[signature]) {
    anagramGroups[signature] = [];
  }
  anagramGroups[signature].push(word);
});

// write the anagram dictionary to a file so we only have to do this once
fs.open("./anagramDictionary.json", "w", (err, fd) => {
  if (err) {
    throw err;
  }
  fs.write(fd, JSON.stringify(anagramGroups), (err) => {
    if (err) {
      throw err;
    }
    fs.close(fd, (err) => {
      if (err) {
        throw err;
      }
    });
  });
});
