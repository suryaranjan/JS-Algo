function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
  
    let longest = 1, current = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue; // skip duplicates
      if (nums[i] === nums[i - 1] + 1) {
        current++;
      } else {
        longest = Math.max(longest, current);
        current = 1;
      }
    }
    return Math.max(longest, current);
  }


//   Input: [100, 4, 200, 1, 3, 2]
//   Output: 4
//   Explanation: The longest consecutive sequence is [1, 2, 3, 4].
    