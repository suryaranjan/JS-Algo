// DeepClone objects

const deepClone = (obj) => {
    if(obj !== null || typeof obj !== Object){
        return obj;
    }
    if(Array.isArray(obj)){
        return obj.map(x => deepClone(x))
    }
    
    const clonedObj = {}
    const keys = Object.keys(obj);
    
    for(let key in keys){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = obj[key];
        }
    }
    
    return clonedObj;
}

const original = { a: 1, b: { c: 2, d: [3, 4] }, e: new Date() }; 
const copy = deepClone(original); 
 console.log(copy);
