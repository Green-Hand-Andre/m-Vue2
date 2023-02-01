class Observer{
    constructor(data){
        // Object.defineProperty只能劫持已经存在的后增的或者删除的不知道
        this.walk(data);

    }
    walk(data){
        // 重新定义属性
        Object.keys(data).forEach(key=>defineReactive(data,key,data[key]))


    }
}

export function defineReactive(target,key,value){
    Object.defineProperty(target,key,{
        get(){//取值
            return value;

        },
        set(newvalue){//修改
            if(newvalue === value) return
            value =  newvalue;

        }
    })


}

export function observe(data){
    if(typeof data !== "object" || data == null){
        return;

    }
    return new Observer(data);

}