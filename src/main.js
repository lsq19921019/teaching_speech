import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import Vconsole from 'vconsole';
import vuex from 'vuex';

if(location.href.indexOf('192.168') > 0) {
    //本地开发环境显示调试器
    new Vconsole();
}

// 全局引入公共js
import Base from '../static/base';
var Promise = require('es6-promise').Promise;
Promise.polyfill();
Vue.prototype.$ajax = axios;

// 全局引入公共样式
require('../static/base.css');
Vue.prototype.Base = Base;

//axios请求数据格式化成java服务器能识别的组件
import qs from 'qs'; 
Vue.prototype.$qs = qs;

import datasfake from '../static/datas.json';
Vue.prototype.datasfake = datasfake;

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
