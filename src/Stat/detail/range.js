/**
 * Create by xiaofu.qin {2017/9/19}
 * 与Python的range函数类似的功能
 */
define(function (require) {

    var utilMath = require("./Util/Math");

    function range(start, end, step) {
        var arr = [];

        switch (arguments.length) {
            case 1:
                end = start;
                start = 0;
                step = 1;
                break;
            case 2:
                step = 1;
                break;
        }

        while(start < end) {
            arr.push(start);
            start = utilMath.accAdd(start, step);
        }

        return arr;
    }

    return range;
});
