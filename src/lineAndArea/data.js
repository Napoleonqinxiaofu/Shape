/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(function (require) {

    var defaultAccessor = require("../common/defaultAccessor");
    var util = require("../common/util");

    function acceptData(data, accessor) {
        // 这一步暂时只是缓存数据，不回话对数据进行操作，因为咱都不知道马上回发生什么动作
        accessor = defaultAccessor(accessor);
        this._dataAccessor = accessor;

        if (!util.isArray(data)) {
            throw new TypeError("data function require an array as it's param.");
        }

        // 不要破坏原始数据
        this._points = util.clone(data);
        this._originData = util.clone(data);

        return this;
    }

    // 处理数据用
    function dealPoints(self, points, accessor) {
        // 最终points的格式应该是[{x: ..., y: ...}, {x: ..., y: ...}, ...]
        self._points = points.map(function (point, index) {
            // 经过这一步的accessor之后的point应该是{x: ..., y: ...}这样的
            point = accessor(point, index);

            return {
                x: self._xAccessor(point.x, index),
                y: self._yAccessor(point.y, index)
            };
        });

        return self._points;
    }

    return {
        acceptData: acceptData,
        dealData: dealPoints
    };
});