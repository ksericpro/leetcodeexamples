/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    console.log('nums=', nums);
    for(let i =0; i<nums.length;i++){
        max = Math.max(nums[i] + i,max);
        console.log("max=", max);
        if(max >= nums.length-1) return true;
        if(max == i && nums[i] == 0) return false;
    }

    return false;
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))