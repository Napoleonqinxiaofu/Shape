/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    var accessorDefault = require("./defaultAccessor");

    function minArray(array, accessor) {
        accessor = accessorDefault(accessor);

        var value, i = -1, len = array.length, minValue;

        while (++i < len) {
            value = accessor(i, array[i]);

            if( array[i] == null || value == null || window.isNaN(value) ) {
                continue;
            }

            minValue == undefined && (minValue = value);

            if( minValue > value ) {
                minValue = value;
            }
        }

        return minValue;
    }

    return minArray;
});
