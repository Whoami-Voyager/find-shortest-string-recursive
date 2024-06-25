function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const firstString = arr[0];
  const shortestOfRest = findShortestStringRecursive(arr.slice(1));

  return firstString.length <= shortestOfRest.length ? firstString : shortestOfRest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function takes in array
// it slices the array until it reaches the shortest string, recursively calling the function
