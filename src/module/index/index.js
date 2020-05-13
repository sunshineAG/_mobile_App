import Vue from 'vue'
import 'vant/lib/index.css';
import '@/theme/globalIndex.css'
import Layout from '@/view/Layout'
import router from '@/router/index.js'
import axios from 'axios'
import Qs from 'qs' //检查字符串解析序列化字符串
import 'amfe-flexible/index.js'

Vue.prototype.$axios = axios

Vue.config.productionTip = true  //在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    return Qs.stringify(data)
}];
axios.interceptors.response.use(
    response => {
    
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                case 401:
                case 404:
                case 500:
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

window.app = new Vue({
  el: '#app',
  data:{},
  router,
  template: '<Layout/>',
  components: { Layout }
})