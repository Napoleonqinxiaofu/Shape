/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require"], function (require) {

    function colors(s) {
        return s.match(/.{6}/g).map(function (x) {
            return "#" + x;
        });
    }

    function category10() {
        return colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    }

    function category20a() {
        return colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
    }

    function category20b() {
        return colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
    }

    function category20c() {
        return colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
    }

    return {
        category10: category10,
        category20a: category20a,
        category20b: category20b,
        category20c: category20c,
    };
});
 