/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
     const n = isConnected.length;
    const vis = new Array(n).fill(false);
    let c = 0;

    function dfs(cit) {
        vis[cit] = true;

        for (let i = 0; i < n; i++) {
            if (isConnected[cit][i] === 1 && !vis[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!vis[i]) {
            c++;
            dfs(i);
        }
    }

    return c;
};