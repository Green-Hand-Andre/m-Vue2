
import {initState} from "./state"
export function initMixin(Vue){
    // 给vue增加init方法
    debugger
    Vue.prototype._init = function(options){
        const vm = this;
        vm.$options = options;//用户选项挂在实例上
        initState(vm);
    }

}

