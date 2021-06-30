module.exports = {
    publicPath: './',
    //新增了一个原生的配置
    configureWebpack: {
        module: {
            rules: [{
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            }]
        }
    }
}