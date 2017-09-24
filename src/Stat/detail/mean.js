/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    var accessorDefault = require("./defaultAccessor");

    function meanArray(array, accessor) {
        accessor = accessorDefault(accessor);

        var len = array.length,
            len1 = len,
            i = -1,
            value,
            sum = 0;

        while (++i < len) {
            value = accessor(i, array[i]);

            if (value == null || array[i] == null || isNaN(value)) {
                len1--;
                continue;
            }

            sum += +value;
        }

        return sum / len1;
    }

    return meanArray;

});