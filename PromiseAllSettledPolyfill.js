Promise.allSettled = function(tasks){
    
    const result = [];
    return new Promise((resolve, reject) => {
        for(task of tasks){
            Promise.resolve(task)
            .then(res => {
                result.push({status:'Fulfilled', value: res});
            })
            .catch(err => {
                result.push({status:'rejected', message: err});
            })
            .finally(() => {
                if(result.length === tasks.length){
                    resolve(result)
                }
            })
        }
    })
    
    
}

const p1 = Promise.resolve(42); 
const p2 = Promise.reject("Error occurred");
const p3 = new Promise(res => setTimeout(() => res("done"), 100));
Promise.allSettled([p1, p2, p3])
.then(results => { console.log(results); })
// [ // { status: "fulfilled", value: 42 }, 
// { status: "rejected", reason: "Error occurred" }, 
// { status: "fulfilled", value: "done" } // ] });