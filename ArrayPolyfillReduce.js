// Array reduce function polifyll

Array.prototype.myReduce = function(fun, intialValue){
    let acc;
    let index = 0;
    const result = [];
    if(intialValue){
        acc = intialValue
    }else {
    // this is where we assume there is no null value
        
        // acc = this[0];
        // index = 1;
        
        while(index<this.length){
            if(this[index]){
                acc = this[index];
                index++;
                break;
            }else{
                index++;
            }
        }
    }
    
    for(let i = index; i<this.length; i++){
        // acc = fun.call(this, acc, this[i], i);
        acc = fun(acc, this[i])
    }
    return acc;

}

console.log(['',null, undefined, 1,2, null,3,4].myReduce((c,x) => c+x));
