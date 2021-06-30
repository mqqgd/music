module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-pxtorem': {
            rootValue: 100, // 根元素字体大小
            //需要转换的是width, height
            // propList: ['width', 'height']
            propList: ['*']
        }
    }
}