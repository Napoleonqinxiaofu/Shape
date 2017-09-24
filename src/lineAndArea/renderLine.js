/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(["require", "../common/util", "../canvas/helper", "../Tween/src/Animate/Tween", "./renderArea"],
    function (require) {

    var util = require("../common/util");
    var helper = require("../canvas/helper");

    var dataUtil = require("./data");

    var Tween = require("../Tween/src/Animate/Tween");

    var areaRender = require("./renderArea");

    function render(context, styles) {
        if (!this._context && context) {
            this._context = context;
        }

        // deal data
        dataUtil.dealData(this, this._points, this._dataAccessor);

        this._points = this._curveMethod(this._points, this._tension);

        helper.retinaScale(this._context);

        // 遍历所有的points，然后开始渲染整个线条
        this._animationDuration != null
            ? renderLineInAnimation(this, this._points, this._context, styles)
            : renderLine(this._points, this._context, styles);

        return this;
    }

    var defaultStyles = {
        lineWidth: 1,
        strokeStyle: "#000000",
        fillStyle: "#ffffff"
    };

    function renderLine(points, context, styles) {
        context.save();

        setStyles(context, styles);

        context.beginPath();

        var i = 1,
            len = points.length,
            point = points[0];

        context.moveTo(point.x, point.y);
        for (; i < len; i++) {
            point = points[i];
            context.lineTo(point.x, point.y);
        }

        context.stroke();
        context.closePath();
        context.restore();
    }

    // 添加canvas的样式
    function setStyles(context, styles) {
        if (!util.isObject(styles)) {
            styles = {}
        }

        styles = util.merge(styles, defaultStyles);

        Object.keys(styles).forEach(function (item) {
            context[item] = styles[item];
        });
    }

    function renderLineInAnimation(self, points, context, styles) {
            var bounds = areaRender.getBounds(points),
                minX = bounds.minX,
                maxX = bounds.maxX,
                minY = bounds.minY,
                maxY = bounds.maxY,
                duration = self._animationDuration,
                mode = self._easeMode;

            var lastPoints = null;

            new Tween({
                x: {
                    start: minX,
                    end: maxX
                }
            })
                .duration(duration)
                .ease(mode)
                .eachFrame(function (obj) {
                    var newPoints = points.filter(function(p) {
                        return p.x < obj.x;
                    });

                    if( lastPoints ) {
                        renderLine(lastPoints, context, {
                            strokeStyle: "#ffffff",
                            fillStyle: "#ffffff",
                            lineWidth: styles && styles.lineWidth ? styles.lineWidth : 1
                        });
                    }

                    lastPoints = newPoints;

                    renderLine(newPoints, context, styles);
                })
                .start();
    }

    return render;

});
