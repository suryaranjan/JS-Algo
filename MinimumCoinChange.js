const minimumCoin = (coins, sum) => {
    
    const dp = new Array(sum+1).fill(Infinity);
    dp[0] = 0;
    
    for(let i=1; i<=sum ; i++){
        for(let coin of coins){
            if(i >= coin){
                dp[i] = Math.min(dp[i], dp[i-coin]+1);
             }
        }
    }
    return dp[sum]
}
console.log(Infinity+1)
console.log(minimumCoin([1,2,5,10], 19))