/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let new1 = str1.split("").sort().join("");
  let new2 = str2.split("").sort().join("");
  if (new1 == new2) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

module.exports = isAnagram;
