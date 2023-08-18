# Sub-anagram finder

This is a homework problem I'm doing for a job application. Here is the prompt:

```
Please write a function that accepts a single string as input, and that returns a list of English words that can be created using some combination of the letters in the input string.

Example input: "oogd"
Example output: ["good", "god", "dog", "goo", "do", "go"]

You can assume you'll be given an array of strings that enumerates all valid English words. To determine whether a word is a valid word, you can simply check for its presence in the array (e.g., `WORDS.includes(word)`)
```

### Setup

Clone the repo. I included a word list I found on the internet, feel free to replace it with whatever you prefer.

Run `npm install`.

Run `npm run build-anagrams`. This runs the pre-processing code I wrote that groups words in the word list into anagram groups. This would only need to be run once per time the word list is updated, so performance is not a concern, although it is pretty fast regardless, O(length of the word list).

Run `npm run test`. This starts a command line program that lets you input a string of letters to get all the English words that can be made out of subsets of those letters. You can use this to test my code.

### Notes

The main algorithm can be found in `findSubAnagrams.ts`. It is a recursive algorithm that manages surprisingly good performance even for large (~20 character) input sizes. The problem size scales very fast, something like O(n!) (I didn't actually do the math), but the short-circuiting I'm doing keeps it manageable. For larger input sizes, it will necessarily scale to be unacceptably slow, but there is a solution for this which I haven't implemented here, but I would if this was a real production app. My plan is that for inputs beyond a certain size, I will not use this recursive algorithm but instead I will simply go through the anagram group list and check each one to see if it's a subset of the input. This caps the total runtime at O(word list length), which, while a large number, is at least finite.

You may also notice that I use `require` for some imports and `import` for others; this is an artifact of ts-node and importing json and I find it unpleasant, but I decided not to spend time figuring out all the setup I would need to make it work with just `import`. In a real project I would like to fix this.
