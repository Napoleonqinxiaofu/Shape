/**
 * Create by xiaofu.qin {2017/9/23}
 */

define(function (require) {

    // 设置基线
    function baseY(num) {
        num = +num;
        if (isNaN(num)) {
            num = 0;
        }
        this.y0 = +num;

        return this;
    }

    return baseY;

});
