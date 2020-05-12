import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import Index from '@/components/Index'
import router from '@/router/index.js'
import axios from 'axios'
import store from '@/vuex/store'
import Qs from 'qs' //检查字符串解析序列化字符串
import 'amfe-flexible/index.js'
// import { Panel } from 'vant';
// Vue.use(Vant);

var storage=require('../../common/store')
var comConf=require('../../common/comConfig')

Vue.prototype.$axios = axios


Date.prototype.format = function (fmt) { //author: meizz
    var date = new Date(this);
    if (isNaN(date.getTime())) return null;

    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


Vue.config.productionTip = true  //在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    return Qs.stringify(data)
}];
axios.interceptors.request.use(
    // config => {
    //     let jwtToken = storage.store.get('token');
    //     if (jwtToken) {
    //         config.headers.Authorization = jwtToken;
    //         config.headers['X-CSRF-TOKEN'] = 'token';
    //     }
    //     return config;
    // },
    // err => {
    //     return Promise.reject(err);
    // }
);
axios.interceptors.response.use(
    response => {
        switch (response.data.status) {
            case 0:
            case 2:
            case 5:
                Notice.error({
                    title: '提示！',
                    desc: response.data.msg
                    , duration: 3
                });
                break
        }
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                case 401:
                case 404:
                case 500:
                    Notice.error({
                        title: '提示！',
                        desc: '网络异常，请重试！'
                        , duration: 3
                    });
                    break
            }
        }
        if(error.response) {
            return Promise.reject(error.response.data)   // 返回接口返回的错误信息
        }
    }
);

/*loading*/
// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     next();
// });
//
// router.afterEach((to, from, next) => {
//     iView.LoadingBar.finish();
// });

window.app=new Vue({
  el: '#app',
  data:{},
  store,
  router,
  template: '<Index/>',
  components: { Index }
})