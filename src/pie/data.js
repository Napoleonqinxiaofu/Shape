/**
 * Create by xiaofu.qin {2017/9/23}
 * description:
 */
define(["require", "../common/util", "../common/defaultAccessor"], function (require) {

    var util = require("../common/util");
    var defaultAccessor = require("../common/defaultAccessor");

    function data(data, accessor) {
        if (!util.isArray(data)) {
            throw new TypeError("data function require an array as it's param.");
        }

        this._dataAccessor = defaultAccessor(accessor);
        this._originData = util.clone(data);

        this._data = dealData(data, this._dataAccessor);

        return this;
    }

    function dealData(data, accessor) {
        return data.map(function(d, i) {
            return accessor(d, i);
        });
    }

    return {
        data: data,
        dealData: dealData
    };

});
 