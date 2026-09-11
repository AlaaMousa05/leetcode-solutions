/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
     if (n === 1) return 1;

    const count = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        count[a]--;
        count[b]++;
    }

    for (let p = 1; p <= n; p++) {
        if (count[p] === n - 1) return p;
    }

    return -1;

};