// Object polyfill of assign
// As assign is a static function it will be applying to function directly instead of assigning to prototype

Object.assign = function(target, ...sources){
    const tar = Object(target);
    
    for(let source of sources){
        if(source){
            for(let key in source){
                tar[key] = source[key];
            }
        }
    }
    
    return tar;
}

const target = { a: 1 }; 
const source1 = { b: 2 }; 
const source2 = { c: 3 }; 
Object.assign(target, source1, source2); 
console.log(target);