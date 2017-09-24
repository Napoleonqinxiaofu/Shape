/**
 * Create by xiaofu.qin {2017/9/23}
 */
define(function (require) {

    var mathUtil = require("../common/Math");

    function startAngle(num) {

        this._startAngle = mathUtil.numToRdian(num);

        return this;
    }

    return startAngle;

});
