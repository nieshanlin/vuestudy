const path = require('path')
//动态配置webpack
module.exports={
    //动态配置webpack入口
    entry:'./src/main.js',
    //动态获取webpack中出口文件的相对位置
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载，不负责解析，渲染，style-loader负责渲染，使用多个loader是从又到左时的

                use: [ 'style-loader', 'css-loader' ]
            },
            {//这个版本的less太高了，改为4.10.2
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片，小于limit时， 会将图片编译成base64字符串形式，了
                            //当加载的图片，大于limit时， 需要使用file-loader模块进行加载,会从新命名，防止重复。

                            limit: 15000,
                            //对文件的命名进行配置，先是原来文字，再hash取8位，[ext]结尾
                            name:'img/[name].[hash:8].[ext]'
                        },

                    }
                ]
            }
        ]
    }
}