/**
 * Create by xiaofu.qin {2017/9/20}
 * 类似Numpy里面的平铺数组的操作
 */
define(function (require) {

    var util = require("./Util/util");
    var merge = require("./merge");

   function flattenArray(array) {
        var n = array.length,
            newArray = [],
            i = -1;

        while( ++i < n) {
            if(util.isArray(array[i]) ) {
                newArray = merge(newArray, flattenArray(array[i]));
            }else {
                newArray.push(array[i]);
            }
        }

        return newArray;
   }

   return flattenArray;

});
