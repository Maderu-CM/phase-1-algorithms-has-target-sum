function hasTargetSum(array, target) {
  const numSet = new Set();//keep track of the numbers encountered so far

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(array[i]);
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  The hasTargetSum function takes an array of integers and a target integer as input. It uses a set (numSet) to keep track of the numbers encountered so far. It iterates through the array and calculates the complement of the current number with respect to the target. If the complement exists in the set, it means a pair of numbers that adds up to the target has been found, and the function returns true. If no such pair is found after iterating through the entire array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
