/**
 * Created by Administrator on 2017/12/2 0002.
 */
var htmlWP = require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',//入口文件
    output:{
        path:__dirname+'/dist',//绝对路径
        filename:'build.js'
    },
    module:{
        loaders:[
            {   test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {   test: /\.scss$/,  //打包 .scss文件
                loader:'style-loader!css-loader!sass-loader'
            },
            {   test: /\.less$/,  //打包 .less文件
                loader:'style-loader!css-loader!less-loader'
            },
            {   test: /\.(png|gif|jpg|ttf)$/,  //打包 .less文件
                loader:'url-loader?limit=40000' //限制图片的大小,40kb为临界值
            },
            {
                test: /\.js$/,  // 将.js文件中的es6语法转成es5语法
                loader:'babel-loader',
                exclude:/node_modules/ // 排除node_modules文件夹下的js文件不用被转换
            },
            {   test: /\.vue$/,  //解析vue组件
                loader:'vue-loader' //限制图片的大小,40kb为临界值
            }
        ]
    },
    babel:{
        presets:['es2015'],  // 配置将es6语法转换成es5语法
        plugins:['transform-runtime'] // 用来解析vue文件
    },
    plugins:[
        new htmlWP({
                title: '首页',  //生成的页面标题
                filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
                template: 'index1.html' //根据template.html这个模板来生成(这个文件程序员自己书写)
        })
]

}