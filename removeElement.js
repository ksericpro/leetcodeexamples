/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     var arr = [];
     var ct=0;
     for ( i in nums) {
         if (nums[i] != val) {
             arr.push(nums[i]);
         } else {
             ct++;
         }
     }
     for(var k = 0; k< arr.length; k++){
         nums[k] = arr[k];
     }
     
     for (var j=arr.length; j < arr.length + ct; j++) {
         nums[j] = '_';
     }
     console.log("result=",nums, ", k=", arr.length);
     return arr.length;
 };

 removeElement([3,2,2,3], 3)
 removeElement([0,1,2,2,3,0,4,2], 2)