/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit2 = function(gas, cost) {
    console.log("gas=", gas);
    console.log("cost=", cost);

   // var current_gas = 0;
   // let arr = [...cost];
    let current_station = 0;
    let start_station = 0;
   // let last_station = gas.length - 1;

    exit = false;
    circuit_breaker=0;
    var current_gas=0;
    var total_gas = 0;
    do {
        current_gas += gas[current_station];
        console.log("#current station=", current_station, ", #current_gas=", current_gas);
        var gas_to_next_station = current_gas - cost[current_station];
        console.log("#current station=", current_station, ", #current_gas=", current_gas, ", #gas_to_next_station=", gas_to_next_station);
        if (gas_to_next_station<0) {
           // continue;
           current_gas = 0;
           start_station++;
        } else {
           current_gas -= gas;
        }
        console.log("#current_gas=", current_gas, ", #start_station=", start_station);
        current_station++;
        if (current_station>last_station){
            current_station = 0;
        }
        circuit_breaker++;
        if (circuit_breaker>4) exit=true;
    } while (!exit);

    return start_station;
};

var canCompleteCircuit = function(gas, cost) {
    console.log("gas=", gas);
    console.log("cost=", cost);
    let totalTank = 0;
    let currentTank = 0;
    let startingStation = 0;
    for (let i = 0; i < gas.length; i++) {
        const netCost = gas[i] - cost[i];
        console.log(startingStation, ":nextCost=", netCost)
        totalTank += netCost;
        currentTank += netCost;
        console.log(i, ":totalTank=", totalTank, ", currentTank=", currentTank)
        if (currentTank < 0) {
            startingStation = i+1;
            currentTank = 0;
        }
    }
    return totalTank < 0 ? -1 : startingStation;
};

canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])
//canCompleteCircuit([2,3,4], [3,4,3])