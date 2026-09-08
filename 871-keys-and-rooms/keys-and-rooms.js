/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
     let visited = new Set();

    function dfs(room) {
        visited.add(room);

        for (let key of rooms[room]) {
            if (!visited.has(key)) {
                dfs(key);
            }
        }
    }

    dfs(0);

    return visited.size === rooms.length;
};