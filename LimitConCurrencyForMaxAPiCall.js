// Limit cuncurrency api call to max 3(default) at a time

const limitConcurrency = async (tasks, limit) => {
    const result = [];
    const executing = new Set();
    
    for(task of tasks){
        const p = Promise.resolve().then(() => task());
        result.push(p);
        executing.add(p);
        p.finally(() => executing.delete(p))
        if(executing.size >= 3){
            await Promise.race(executing);
        }
    }
    
    return Promise.all(result);
}

// Example tasks: API calls
const tasks = Array.from({ length: 10 }, (_, i) => async () => {
  console.log(`Starting request ${i}`);
  await new Promise(res => setTimeout(res, 1000)); // simulate API delay
  console.log(`Finished request ${i}`);
  return i;
});

// Run with max 3 concurrent
limitConcurrency(tasks, 3).then(results => {
  console.log("All done:", results);
});
