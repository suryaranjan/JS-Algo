Promise.all = function(tasks){
    
    const result = [];
    
    return new Promise((resolve, reject) => {
        for(task of tasks){
            Promise.resolve(task)
            .then(res => {
                result.push(res);
                if(result.length === tasks.length){
                    resolve(result);
                }
            })
            .catch(err => {
                reject(err)
            })
        }
        
    })
}

const p1 = Promise.resolve(10); 
const p2 = 20; 
// non-promise value
const p3 = new Promise(res => setTimeout(() => res(30), 100)); 
Promise.all([p1, p2, p3]) 
.then(results => console.log(results)) // [10, 20, 30] 
.catch(err => console.error(err));