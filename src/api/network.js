//网络工具类
import axios from "axios";
import Vue from "vue"

//全局配置
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 5000

//封装get/post方法
export default {
    get: function(path = '', data = {}) {
        return new Promise(function(resolve, reject) {
            axios.get(path, {
                    params: data
                })
                .then(function(response) {
                    resolve(response.data);
                })
                .catch(function(error) {
                    reject(error);
                })
        })
    },
    post: function(path = '', data = {}) {
        return new Promise(function(resolve, reject) {
            axios.post(path, data)
                .then(function(response) {
                    resolve(response.data);
                })
                .catch(function(error) {
                    reject(error);
                })
        })
    }
}