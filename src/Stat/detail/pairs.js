/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    // pair 表示一对的意思
    function pair(a, b) {
        return [a, b];
    }

    function arrayPairs(array, accessor) {
        if (typeof accessor !== "function") {
            accessor = pair;
        }

        var len = array.length,
            i = 0,
            pairsContainer = new Array(len - 1);

        while (++i < len) {
            pairsContainer[i-1] = accessor(array[i-1], array[i]);
        }

        return pairsContainer;
    }

    return arrayPairs;

});