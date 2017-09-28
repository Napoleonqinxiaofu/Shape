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
            if (context && !context.canvas) {
                styles = context;
            }

            // deal data
            dataUtil.dealData(this, this._points, this._dataAccessor);

            // 将原始的几个点保存下来，方便绘制标识符的时候使用
            this._symbolPoints = util.clone(this._points);

            this._points = this._curveMethod(this._points, this._tension);

            helper.retinaScale(this._context);

            renderLineInAnimation(this, this._points, this._context, styles);

            return this;
        }

        // 绘制线条
        function renderLine(points, context, styles) {
            context.save();

            context.beginPath();

            helper.setContextStyles(context, styles);

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

        // 绘制标识符
        function renderSymbol(self) {
            if (!self._symbol) {
                return false;
            }
            var symbol = self._symbol,
                type = self._symbolType,
                color = self._symbolColor,
                points = self._symbolPoints,
                args = null;

            // 设置canvas上下文
            symbol.context(self._context);

            switch (type) {
                case "circle":
                    // x, y, radius, styles
                    args = [null, null, 5, {fillStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x;
                        args[1] = p.y;
                        symbol.circle.apply(symbol, args);
                    });
                    break;
                case "square":
                    // x, y, radius, styles
                    var length = 10;
                    args = [null, null, length, length, {fillStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x - length / 2;
                        args[1] = p.y - length / 2;
                        symbol.square.apply(symbol, args);
                    });
                    break;
                case "star":
                    var length = 6;
                    args = [null, null, length / 2, length, {fillStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x;
                        args[1] = p.y;
                        symbol.star.apply(symbol, args);
                    });
                    break;
                case "triangle":
                    var length = 8;
                    args = [null, null, length, {fillStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x;
                        args[1] = p.y;
                        symbol.triangle.apply(symbol, args);
                    });
                    break;
                case "cross":
                    var length = 10;
                    args = [null, null, length, {strokeStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x;
                        args[1] = p.y;
                        symbol.cross.apply(symbol, args);
                    });
                    break;
                case "diamond":
                    var length = 6;
                    args = [null, null, length, length, {fillStyle: color}];
                    points.forEach(function (p) {
                        args[0] = p.x;
                        args[1] = p.y;
                        symbol.diamond.apply(symbol, args);
                    });
                    break;
            }
        }

        // 使用动画的方式绘制线条
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
                    var newPoints = points.filter(function (p) {
                        return p.x < obj.x;
                    });

                    if (lastPoints) {
                        renderLine(lastPoints, context, {
                            strokeStyle: "#ffffff",
                            fillStyle: "#ffffff",
                            lineWidth: styles && styles.lineWidth ? styles.lineWidth : 1
                        });
                    }

                    lastPoints = newPoints;

                    renderLine(newPoints, context, styles);
                })
                .complete(renderSymbol.bind(null, self))
                .start();
        }

        return render;

    });
