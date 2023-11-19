/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var list = [];

    if (nums.find(a => a == 1)){
        console.log("1 is found")
    }
    var _nums = [...nums];
   // let _nums_1 = nums.filter((item, index) => item != 1);
    console.log("_nums=", _nums);
   // console.log("_nums_1=", _nums_1);
    for(var i in nums){
        let data = nums.filter((_, index) => index != i);
        const sum = data.reduce((a, item) => a * item)
        console.log("sum=", sum);
        list.push(sum);
    }
    return list;
};

var productExceptSelf2 = function(nums) {
    let mul = 1, countZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            countZero++;
        } else {
            mul *= nums[i];
        }
    }
    if (countZero > 1) {
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            ans.push(0);
        }
        return ans;
    } else if (countZero == 1) {
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                ans.push(mul);
            } else {
                ans.push(0);
            }
        }
        return ans;
    } else {
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            let val = mul / nums[i];
            ans.push(val);
        }
        return ans;
    }
};

productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3])