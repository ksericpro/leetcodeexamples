

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex3 = function(citations) {
    const h = citations.length;
    citations.sort ((a,b)=>(a-b));
    console.log("sort=", citations)
    let i;
    for(i=0;i<h;i++){
        console.log("h-i=", h-i);
        if(h-i<=citations[i]){
            break;
        }
    }
    return h-i;
}

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {    
    citations.sort((a, b) => b - a) ;
    i = 0;
    console.log("citations=", citations)
    //console.log(citations[i], " vs ", i)
    while (citations[i] > i) {   
        console.log(citations[i], " vs ", i)     
        i ++ ;       
    }
    console.log("index=",i)
    return i 
};

hIndex([100]);
hIndex([3,0,6,1,5]);
hIndex([1,3,1])