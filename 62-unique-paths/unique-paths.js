/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
     var arr=new Array(m).fill(0).map(()=>new Array(n).fill(0));
  for(var i=m-1;i>=0;i--){
    for(var j=n-1;j>=0;j--){
      if(i==m-1){
        arr[i][j]=1;
      }
      else if(j==n-1){
        arr[i][j]=1;
      }
      else{
        arr[i][j]=arr[i+1][j]+arr[i][j+1];
      }
    }
  }
  return arr[0][0];
};