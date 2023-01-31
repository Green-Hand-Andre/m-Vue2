(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

    function initMixin(Vue) {
      var _this = this;
      // 给vue增加init方法
      debugger;
      Vue.prototype._init = function (options) {
        var vm = _this;
        vm.$options = options; //将用户的选项挂在实例上
        initState(vm);
      };
    }
    function initState(vm) {
      var opts = vm.$options; //获取所有选项
      if (opts.data) {
        initData(vm);
      }
    }
    function initData(vm) {
      vm.$options.data;
    }

    function Vue(options) {
      debugger;
      this._init(options);
    }
    console.log(333);
    initMixin(Vue);

    return Vue;

}));
//# sourceMappingURL=vue.js.map
