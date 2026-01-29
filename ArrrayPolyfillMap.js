

// Array Map function polifyll

Array.prototype.myMap = function(fn){
    if(typeof fn !== 'function'){
        throw new Error("callback is not a function")
    }
    const result = [];

    for(let i=0; i<this.length; i++){
        // result[i] = fn.call(this, this[i], i)
        result[i] = fn(this[i], i)
        
    }
    return result;
}

console.log([1,2,3,4].myMap(x => x*2));




