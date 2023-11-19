
var RandomizedSet = function() {
    this.list = [];
};

// Add a prototype property
//RandomizedSet.prototype.list = [];

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    var found = this.list.find(x => x===val);
    console.log("insert ", val , ", found=", found);
    if (found===undefined){
        this.list.push(val);
        console.log("add val=",val);
        console.log("list=", this.list);
        return true;
    } 
    console.log("list=", this.list);
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    console.log("remove val=",val);
    console.log("list=", this.list);
    var found = this.list.findIndex(x => x===val);
    if (found>-1){
        this.list.splice(found, 1); 
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.getRandom()