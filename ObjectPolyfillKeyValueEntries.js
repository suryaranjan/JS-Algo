Object.keys = function(obj){
    const result = [];
    for(let key in obj){
        result.push(key);
    }
    return result;
}

Object.values = function(obj){
    const result = [];
    for(let key in obj){
        result.push(obj[key]);
    }
    return result;
}

Object.entries = function(obj){
    const result = [];
    for(let key in obj){
        result.push([key, obj[key]]);
    }
    return result;
}

const obj = {
    name: 'ssa',
    age: 'as',
    asas: 'asas'
}


console.log("keys",Object.keys(obj))
console.log("values",Object.values(obj))
console.log("entries",Object.entries(obj))
