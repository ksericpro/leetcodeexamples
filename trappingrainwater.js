/**
 * @param {number[]} height
 * @return {number}
 */
 /* Intuition
To solve this problem, we can use the two-pointer technique. We can start by initializing two pointers, one at the beginning and one at the end of the array. We also initialize two variables to keep track of the maximum height on the left and the right side of the array.

We then iterate through the array using the two pointers. At each iteration, we update the maximum height on the left and right sides of the array. We also calculate the amount of water that can be trapped at the current index based on the difference between the minimum of the two maximum heights and the height at the current index.

We keep track of the total amount of water that can be trapped by summing up the amount of water trapped at each index. Finally, we return the total amount of water trapped.

Approach
In this code, we initialize the left and right pointers to the first and last indices of the array, respectively. We also initialize the leftMax and rightMax variables to 0, since there are no maximum heights initially.

We then use a while loop to iterate through the array using the two pointers. At each iteration, we check if the height at the left pointer is less than the height at the right pointer. If so, we update the leftMax variable if necessary and calculate the amount of water that can be trapped at the current index based on the difference between the leftMax and the height at the current index. We then move the left pointer to the right.

If the height at the left pointer is greater than or equal to the height at the right pointer, we update the rightMax variable if necessary and calculate the amount of water that can be trapped at the current index based on the difference between the rightMax and the height at the current index. We then move the right pointer to the left.

Finally, we return the total amount of water that can be trapped.
*/
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    console.log(water);
    return water;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
trap([4,2,0,3,2,5]);