import { AnagramDictionary, getAnagramSignature } from "./util";
const anagramDictionary: AnagramDictionary = require("./anagramDictionary.json");

const findSubAnagrams = (
  str: string,
  searchedCombinations: Set<string> = new Set<string>()
): string[] => {
  const signature = getAnagramSignature(str);
  // if we have already checked this substring, we can stop
  if (searchedCombinations.has(signature)) {
    return [];
  }
  const words: string[] = [];
  if (anagramDictionary[signature]) {
    words.push(...anagramDictionary[signature]);
  }
  searchedCombinations.add(signature);

  const letters = signature.split("");
  letters.forEach((letter, index) => {
    const subSignature = signature.slice(0, index) + signature.slice(index + 1);
    words.push(...findSubAnagrams(subSignature, searchedCombinations));
  });

  return Array.from(new Set(words)).sort();
};

export default findSubAnagrams;
