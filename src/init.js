
import {initState} from "./state"

import {compileToFunction} from "./compile/index"

export function initMixin(Vue){
    // 给vue增加init方法
    debugger
    Vue.prototype._init = function(options){

        const vm = this;
        vm.$options = options;//将用户的选项挂在实例上
        initState(vm)
        if(options.el){
            vm.$mount(options.el)
        }

    }
    Vue.prototype.$mount = function(el){
        const vm = this;
        el = document.querySelector(el);
        let ops = vm.$options;
        if(!ops.render){
            let template;
            if(!ops.template&&el){
                // 没模板但是有el
                template = el.outerHTML;
            }else{
                if(el){
                    template = ops.template
                }

            }
            if(template){
                const render = compileToFunction(template);
                ops.render = render;
            }
            console.log(template)
            
        }
        ops.render
    }

}


