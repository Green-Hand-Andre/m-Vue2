 import { observe } from "./observe";
 
 export function initState(vm){
    const opts = vm.$options;//获取所有选项
    if(opts.data){
        initData(vm);
    }
}

function initData(vm){
    let data = vm.$options.data;
    vm._data = data;
    data = typeof data === "function" ? data.call(this) : data
    // 数据劫持 defineproxy
    observe(data)

}