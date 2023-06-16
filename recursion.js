/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case
  if(nums.length === 0) return 1;
  // Normal Case
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0; // Base case: no words to compare
  } else if (words.length === 1) {
    return words[0].length; // Base case: only one word in the array
  } else {
    const firstWordLength = words[0].length;
    const remainingWordsLength = longest(words.slice(1)); // Recursive call
    return Math.max(firstWordLength, remainingWordsLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return ''; // Base case: no letters
  } else if (str.length === 1) {
    return str; // Base case: return a single letter as is
  } else {
    const secondLetter = str[0];
    return secondLetter + everyOther(str.slice(2)); // Recursive call
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base cases
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  // Normal case
  if (str[0] === str[str.length - 1]) {
    const remainingSubstring = str.slice(1, -1);
    return isPalindrome(remainingSubstring); // Recursive call with remaining substring
  } else {
    return false; // Characters don't match, not a palindrome
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base cases
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === val) {
    return 0;
  }

  // Normal case
  const remainingArray = arr.slice(1);
  const foundIndex = findIndex(remainingArray, val);
  return (foundIndex !== -1) ? foundIndex + 1 : -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case
  if (str.length === 0) return '';
  // Normal case
  return str[str.length -1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // Base case
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  // Normal case
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
