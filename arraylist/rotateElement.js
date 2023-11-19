/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Medium
 */
var rotate2 = function(nums, k) {
    nums = shiftArrayToRight(nums, k);
    console.log("nums=", nums)
};

var rotate = function(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    } // suppose  ----->---> 
     reverse(0, nums.length-1); // reverse   <--<------
     console.log("x1=",nums)
     reverse(0, k-1) // reverse first part ---><----
     console.log("x2=",nums)
     reverse(k, nums.length-1)// reverse second part --->----->
     console.log("x3=", nums)
     console.log("nums=", nums)
 };
 

/*
unshift add elements to start of list
pop remove last lement
*/
function shiftArrayToRight(arr, places) {
    for (let i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

/*
shift remove the first element
push adds element to end of list
*/
function shiftArrayToLeft(arr, places) {
    for (let i = 0; i < places; i++) {
        arr.push(arr.shift());
    }

    return arr;
}

rotate([1,2,3,4,5,6,7], 3);
//rotate([-1,-100,3,99], 2);
