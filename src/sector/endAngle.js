/**
 * Create by xiaofu.qin {2017/9/23}
 */
define(function (require) {

    var mathUtil = require("../common/Math");

    function endAngle(num) {

        this._endAngle = mathUtil.numToRdian(num);

        return this;
    }

    return endAngle;

});
