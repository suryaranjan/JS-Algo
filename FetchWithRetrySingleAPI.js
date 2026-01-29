// Writing custom function which will make the api call with retries if it is failing with exponential delay

// using recursion
const fetchWithRetry1 = async (uri, retry, delay) => {
    try{
        const result = await fetch(uri);
        return result.json();
    }catch(err){
        if(err){//Condition to check for which type of error you want to retry
            if(retry){
                await new Promise(res => setTimeout(res, delay));
                return fetchWithRetry(uri, retry -1, delay*2);
            }
        } 
        throw err;
    }
}

// using loop
const fetchWithRetry = async (uri, retry, delay) => {
    let delayTime = delay;
    for(let i=0; i< retry; i++){
        try{
            const result = await fetch(uri);
            return result.json();
        }catch(err){
            if(i === retry -1){
                throw err;
            }
            await new Promise(res => setTimeout(res, delayTime));
            delayTime *=2;
        }
    }
    
}
