var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
       console.log(result ^ nums[i]);
    }
    return result;
};

/* console.log(singleNumber([1,1,2,2,5,3,3])); */
result = 2^1

console.log(result);