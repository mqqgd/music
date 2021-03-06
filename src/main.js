import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'


//安装fastclick, 解决移动端100~300ms的点击事件延迟问题
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')