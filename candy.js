/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    console.log("1. candies=", candies)

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    console.log("2. candies=", candies)

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

     console.log("3. candies=", candies)

    return candies.reduce((a, b) => a + b, 0); //initial value 0
};

candy([1,0,2]);
candy([1,2,2]);