/**
 * Create by xiaofu.qin {2017/10/8}
 * description:
 */
define(["require"], function (require) {

    return function (angle) {
        this._angle = isNaN(+angle) ? 0 : +angle;
        return this;
    }

});
 