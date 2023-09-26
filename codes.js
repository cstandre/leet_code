// Two Sum
let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = 1; j < nums.length; j++) {
            let num2 = nums[j]
            let sum = num1 + num2
            if (sum === target && i !== j) {
                return [i,j]
            }
        }
    }
};

// Example 1:
// console.log(twoSum([2,7,11,15], 9)) // => [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// console.log(twoSum([3,2,4], 6)) // => [1,2]

// Example 3:
// console.log(twoSum([3,3], 6)) // => [0,1]

// Constraints:
    // 2 <= nums.length <= 104
    // -109 <= nums[i] <= 109
    // -109 <= target <= 109
    // Only one valid answer exists.


let containsDuplicate = function(nums) {
    let mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
      mySet.add(nums[i]);
    }
    if (mySet.size === nums.length) {
      return false;
    }
    return true;
  };

// Example 1:
// console.log(containsDuplicate([1,2,3,1])) // => true

// Example 2:
// console.log(containsDuplicate([1,2,3,4])) // => false

// Example 3:
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // => true


// Constraints:
    // 1 <= nums.length <= 105
    // -109 <= nums[i] <= 109
