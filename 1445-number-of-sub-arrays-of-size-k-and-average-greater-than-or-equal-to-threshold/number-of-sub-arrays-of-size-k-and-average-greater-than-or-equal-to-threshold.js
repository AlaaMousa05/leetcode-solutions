/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    var slow=0;
    var fast=k-1;
    var res=0;
    var c=0;
     for(var i=0;i<k;i++){
        res += arr[i];
        }
      var  avg=res/k
        if(avg>=threshold)
        c++
    while(fast<arr.length){
        fast++;
        res-=arr[slow]
        res+=arr[fast]
        slow++;
        avg=res/k
        if(avg>=threshold)
        c++
    }
    return c
};