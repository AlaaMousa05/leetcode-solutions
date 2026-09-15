/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
     if(nums.length==0){
    return 0;
  }
  else  if(nums.length==1){
    return nums[0];
  }

  var arr=[nums[0],Math.max(nums[0],nums[1])];
  for(var i=2;i<nums.length;i++){
    arr[i]=Math.max(arr[i-1],nums[i]+arr[i-2]);
  }
  return arr[arr.length-1];
};