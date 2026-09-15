/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1

    var p1 = 1
    var p2 = 1

    for (var i = 2; i <= n; i++) {
        var curr = p1 + p2
        p1 = p2
        p2 = curr
    }

    return p2
};