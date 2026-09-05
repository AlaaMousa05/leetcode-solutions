var twoSum = function(nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        var needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
};