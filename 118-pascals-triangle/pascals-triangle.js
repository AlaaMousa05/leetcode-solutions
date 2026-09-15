/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     var arr=[];
  for(var i=0;i<numRows;i++){
    arr[i]=[];
    arr[i][0]=1;
    for(var j=1;j<i;j++){
      arr[i][j]=arr[i-1][j]+arr[i-1][j-1];
    }
    arr[i][i]=1;
  }
  return arr;
};