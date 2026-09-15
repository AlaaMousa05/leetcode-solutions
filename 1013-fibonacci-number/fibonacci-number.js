/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n,memo={}) {
    if(n==0 || n==1)
    return n;
    if(n in memo)
    return memo[n]
    var rus=fib(n-1,memo) + fib(n-2,memo)
    memo[n]=rus
    return rus
};