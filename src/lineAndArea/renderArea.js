/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(["require", "../common/util", "../canvas/helper", "./data", "../Tween/src/Animate/Tween"],
    function (require) {

    var util = require("../common/util");
    var helper = require("../canvas/helper");

    var dataUtil = require("./data");

    var Tween = require("../Tween/src/Animate/Tween");

    function render(context, styles) {
        if (!this._context && context) {
            this._context = context;
        }
        if (context && !context.canvas) {
            styles = context;
        }

        // deal data
        this._points = dataUtil.dealData(this, this._points, this._dataAccessor);
        this._points = this._curveMethod(this._points, this._tension);

        // 这里既然是面积图，那么就得多两个点来确定面积
        var len = this._points.unshift({
            x: this._points[0].x,
            y: this._yAccessor(this.y0)
        });

        this._points.push({
            x: this._points[len - 1].x,
            y: this._yAccessor(this.y0)
        });

        helper.retinaScale(this._context);

        // 遍历所有的points，然后开始渲染整个线条
        renderAreaInAnimate(this, this._points, this._context, styles)

        return this;
    }

    function readerArea(points, context, styles, bounds) {
        context.save();

        helper.setContextStyles(context, styles);

        context.beginPath();

        // 废弃了
        if( bounds ) {
            context.rect(bounds.minX, bounds.minY, bounds.maxX - bounds.minX, bounds.maxY - bounds.minY);
            context.clip();
        }

        var i = 1,
            len = points.length,
            point = points[0];

        context.moveTo(point.x, point.y);
        for (; i < len; i++) {
            point = points[i];
            context.lineTo(point.x, point.y);
        }

        context.lineTo(points[0].x, points[0].y);

        context.stroke();
        context.fill();
        context.closePath();
        context.restore();
    }

    function renderAreaInAnimate(self, points, context, styles) {
        var bounds = getBounds(points),
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

                newPoints.push({
                    x: newPoints[newPoints.length - 1].x,
                    y: points[points.length - 1].y
                });

                // 覆盖住刚才绘制的图形
                if( lastPoints ) {
                    readerArea(lastPoints, context, {
                        strokeStyle: "#ffffff",
                        fillStyle: "#ffffff",
                        lineWidth: styles && styles.lineWidth ? styles.lineWidth : 1
                    });
                }

                lastPoints = newPoints;

                readerArea(newPoints, context, styles);
            })
            .start();
    }

    function getBounds(points) {
        var minX = points[0].x,
            maxX = points[0].x,
            minY = points[0].y,
            maxY = points[0].y;

        points.forEach(function (point) {
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }

            if (point.x < minX) {
                minX = point.x;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
        });

        return {
            minX: minX, maxX: maxX,
            minY: minY, maxY: maxY
        };
    }

    return {
        render: render,
        readerArea: readerArea,
        getBounds: getBounds
    };

});
