
export function initMixin(Vue){
    // 给vue增加init方法
    debugger
    Vue.prototype._init = (options)=>{

        const vm = this;
        vm.$options = options;//将用户的选项挂在实例上
        initState(vm)

    }

}

function initState(vm){
    const opts = vm.$options;//获取所有选项
    if(opts.data){
        initData(vm);
    }

}

function initData(vm){
    let data = vm.$options.data;

}