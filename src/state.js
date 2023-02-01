 import { observe } from "./observe/index";
 
 export function initState(vm){
    const opts = vm.$options;//获取所有选项
    if(opts.data){
        initData(vm);
    }
}
function proxy(vm,target,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[target][key]

        },
        set(newvalue){
            vm[target][key] = newvalue
        }
    })

}
function initData(vm){
    let data = vm.$options.data;
    debugger
    
    data = typeof data === "function" ? data.call(this) : data
    vm._data = data;
    
    observe(data)
    for(let key in data){
        proxy(vm,"_data",key)

    }

    

}