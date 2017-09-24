/**
 * Create by xiaofu.qin {2017/9/23}
 * description: 设置圆心
 */
define(["require", "../common/util"], function (require) {

    var util = require("../common/util");

    return function (centers) {
        if (!util.isArray(centers) || centers.length !== 2) {
            throw new TypeError("center function require an array at least contain two element.");
        }

        this._centers = [+centers[0], +centers[1]];

        return this;
    }

});
 