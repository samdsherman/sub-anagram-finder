const getAnagramSignature = (word: string): string => {
  const signature = word.split("").sort().join("");
  return signature;
};

type AnagramDictionary = {
  [key: string]: string[];
};

export { AnagramDictionary, getAnagramSignature };
