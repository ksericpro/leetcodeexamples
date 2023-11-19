var maxProfit = function(prices) {
    let output = 0;
    let currentPrice = prices[0];
    console.log("\nprices=", prices)
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        console.log(price, " vs ", prices[i - 1])
        if (price < prices[i - 1]) {
            output += prices[i - 1] - currentPrice;
            currentPrice = price;
            console.log("output=", output, ", currentprice=", currentPrice)
        }
    }

    if (prices[prices.length - 1] >= prices[prices.length - 2]) output += prices[prices.length - 1] - currentPrice;
    console.log("output=", output)
    return output;
};

maxProfit([7,1,5,3,6,4]);
maxProfit([1,2,3,4,5])