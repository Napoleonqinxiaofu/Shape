/**
 * Create by xiaofu.qin {2017/9/20}
 * 将多个数组组合到一个数组里面
 */
define(function (require) {

    function mergeArray() {
        var argLength = arguments.length,
            i = -1,
            j = -1,
            newArray = [],
            len;

        // 遍历每一个数组啊！
        while (++j < argLength) {
            i = -1;
            len = arguments[j].length;
            while (++i < len) {
                newArray.push(arguments[j][i]);
            }
        }

        return newArray;
    }

    return mergeArray;

});
