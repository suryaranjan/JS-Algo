
// Array Filter polifyll


Array.prototype.myFilter = function(fun){
    
    const result = [];
    
    for(let i=0; i<this.length; i++){
        if(fun.call(this, this[i])){
            result.push(this[i]);
        }
    }
    
    return result
}

console.log(['',null, undefined, 1,2, null,3,4].myFilter(x => !isNaN(x)));