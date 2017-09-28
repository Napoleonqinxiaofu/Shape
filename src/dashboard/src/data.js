/**
 * Create by xiaofu.qin {2017/9/27}
 * description:
 */
define(["require", "../../common/util", "../../common/defaultAccessor"], function (require) {

    var util = require("../../common/util");
    var accessor = require("../../common/defaultAccessor");

    // 设置整个仪表盘的数据，不过这里暂时不会去做layout的事情
    function data(data, dataAccessor) {
        this._dataAccessor = accessor(dataAccessor);
        this._originData = util.clone(data);
        this._data = util.clone(data);
        return this;
    }

    function value(dataAccessor) {
        return this;
    }

    // 处理数据，经过这一步处理之后的数据将会变成[{value:...}, {value:...}]的样式
    function dealData(data, dataAccessor) {
        return util.clone(data).map(dataAccessor);
    }

    return {
        data: data,
        value: value,
        dealData: dealData
    };

});
 