/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var max = Math.ceil(nums.length/2);
    console.log("max=", max);
    //Tabulate Count Map
    const map = nums.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1),new Map());
    console.log("map=", map);

    var k=-1;
    for (var [key, value] of map) {
        if (value >= max) {
            console.log(key);
            k = key;
            break;
        }
        //maxValue = (!maxValue || maxValue < value) ? value : maxValue;
    }
    console.log("k=",k);
    return k;
};

majorityElement([3,2,3]);
majorityElement([2,2,1,1,1,2,2]);
majorityElement([2,2]);