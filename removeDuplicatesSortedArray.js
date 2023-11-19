/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var prev = -101;
    var arr = [];
    for(var i in nums){
        if (i==0){
            prev = nums[i];
            arr.push(nums[i])
            continue;
        } else if (nums[i]!=prev) {
            prev = nums[i];
            arr.push(nums[i])
        }
        //console.log("prev=", prev, ", num=",nums[i]);
    }
    ct = nums.length - arr.length
  //  console.log("arr=", arr, " ct=", ct);

    for (var i in arr){
        nums[i] = arr[i];
    }

  //  console.log("nums=", nums, ", length=", nums.length);
    for (var j=arr.length; j < arr.length + ct; j++) {
         nums[j] = '_';
     }
    console.log("result=",nums, ", k=", arr.length);
    return arr.length;
};

removeDuplicates([1,1,2]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);