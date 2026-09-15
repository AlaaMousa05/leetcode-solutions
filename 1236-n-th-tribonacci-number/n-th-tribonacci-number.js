/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
       if (n <= 1) return n
       if(n==2) return 1;
    var p1 = 0
    var p2 = 1
    var p3=1
    for (var i = 3; i <= n; i++) {
        var curr = p1 + p2+p3
        p1 = p2
        p2 = p3
        p3=curr
    }
    return p3
};