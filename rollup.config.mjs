import babel from "rollup-plugin-babel"

export default{
    input:"./src/index.js",//打包入口
    output:{
        // 打包出口
        file:"./dist/vue.js",
        name:"Vue",//global.vue
        format:"umd",//esm es6模块    
        sourcemap:true,//可以调试源代码
    },
    // 插件
    plugins:[
        babel({
            exclude:"node_modules/**"//排除node所有文件
        })

    ]
}