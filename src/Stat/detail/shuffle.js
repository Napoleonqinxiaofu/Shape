/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    // 随机打乱数组的顺序，如果传递了起始和结束的下标，那么就打乱这两个下标之间的元素
    function shuffleArray(array, startIndex, endIndex) {
        var arr = array.slice();
        startIndex = startIndex == null ? 0 : +startIndex;
        endIndex = endIndex == null ? array.length : +endIndex;

        var range = endIndex - startIndex,
            i, t; //IT 挨踢！！！

        while(range) {
            // 获取一个随机的下标
            // |0 表示取整，就是去掉小数部分的取整，与parseInt类似，不过这里只作用与数值类型
            i = Math.random() * range | 0;
            range--;

            // 交换一下随机获取的数值与随机获取到的下标的元素值
            t = arr[startIndex + i];
            arr[startIndex + range] = arr[startIndex + i];
            arr[startIndex + i] = t;
        }

        return arr;
    }

    return shuffleArray;

});
