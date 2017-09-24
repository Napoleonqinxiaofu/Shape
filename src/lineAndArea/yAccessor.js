/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(function (require) {

   var defaultAccessor = require("../common/defaultAccessor");

   // 现在的point是每一个data传递进来的数组元素
   function yAccessor(accessor) {
        this._yAccessor = defaultAccessor(accessor);
        return this;
   }

   return yAccessor;

});
