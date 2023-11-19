/**
 * @param {number[]} nums
 * @return {number}
 * Medium
 */
var removeDuplicates = function(nums) {
    /*let unique = []
    nums.forEach(element=>{
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });*/
    console.log("Original=", nums)
    //Tabulate Count Map
    const map = nums.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1),new Map());
    console.log("map=", map);

    //Tabulate Unique List

    var unique = nums.filter((value, index)=>nums.indexOf(value)===index);
    console.log("unique=", unique);
    var current_index = 0;
    var total = 0;
    var converted_ct = 0;
    for(var i in unique){
        var ct = map.get(unique[i]);
      //  console.log(unique[i],", count=",ct);
        var iteration = ct>2? 2: ct;
        converted_ct += (ct - iteration);
       // console.log("iteration=", iteration)
        for(var j=0; j<iteration; j++){
            nums[current_index++] = unique[i];
            total++;
        }
    }

    for (var j=total; j < total + converted_ct; j++) {
        nums[j] = '_';
    }

   // nums[current_index] = "_"; 
    console.log("result=",nums, ", k=", total);
    return total;

};

removeDuplicates([1,1,1,2,2,3]);

removeDuplicates([0,0,1,1,1,1,2,3,3]);