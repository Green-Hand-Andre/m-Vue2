(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

    function initState(vm) {
      var opts = vm.$options; //获取所有选项
      if (opts.data) {
        initData(vm);
      }
    }
    function initData(vm) {
      var data = vm.$options.data;
      data = typeof data === "function" ? data.call(this) : data;
      console.log(data);
    }

    function initMixin(Vue) {
      // 给vue增加init方法
      debugger;
      Vue.prototype._init = function (options) {
        var vm = this;
        vm.$options = options; //用户选项挂在实例上
        initState(vm);
      };
    }

    function Vue(options) {
      debugger;
      this._init(options);
    }
    initMixin(Vue);

    return Vue;

}));
//# sourceMappingURL=vue.js.map
