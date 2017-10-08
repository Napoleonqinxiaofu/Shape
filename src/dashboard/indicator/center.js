/**
 * Create by xiaofu.qin {2017/10/8}
 * description:
 */
define(["require"], function (require) {

    return function(x, y) {
        this._x = isNaN(+x) ? 0 : +x;
        this._y = isNaN(+y) ? 0 : +y;
        return this;
    }

});
 