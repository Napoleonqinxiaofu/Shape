/**
 * Create by xiaofu.qin {2017/9/24}
 * description:
 */
define(["require"], function (require) {

    function duration(num) {
        this._animationDuration = +num;
        return this;
    }

    function ease(easeMode) {
        this._easeMode = easeMode;
        return this;
    }

    return {
        ease: ease,
        animate: duration
    };

});
 