const combinations = (nums) => {
  const res = [];
  const dfs = (nums, start) => {
    if (start === nums.length - 1) {
      res.push(nums.slice());
      return;
    }

    for (let i = start; i < nums.length; i++) {
      swap(nums, i, start);
      dfs(nums, start + 1)
      swap(nums, i, start);
    }
  }

  dfs(nums, 0);
  return res;
}


const swap = (arr, indexA, indexB) => {
  const temp = arr[indexB];
  arr[indexB] = arr[indexA];
  arr[indexA] = temp;
}

module.exports = {
  combinations
}
