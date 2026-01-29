// Fetch calll
// Calling mulktilple api call and retries for failure ones again
const retriesFailures = async (tasks, retry) => {
    
    const result = [];
    const attempt = 0;
    const wrappedTasks = tasks.map((task) => async () => {
        return await task();
    })
    let pendingTasks = wrappedTasks;
    
    while(attempt <retry && pendingTasks.length > 0){
        const settled = await Promise.allSettled(pendingTasks.map(task => task()));
        const tempPending = [];
        settled.map((settle, index) =>{
            if(settle.status === 'fulfilled'){
                result.push(settle)
            }else{
                if(attempt >= retry){
                    result.push()
                }else{
                    tempPending.push(wrappedTasks[i])
                }
            }
        });
        pendingTasks = tempPending;
        attempt++;
    }
    return result;
    
}