<style scoped>
    .layout{
        background: #f5f7f9;
    }
    .layout .ivu-menu-horizontal {
        height: 80px;
        line-height: 80px;
        z-index:1000
    }
    .verionClass {
        position: absolute;
        top: 40px;
        left: 150px;
        width: 50px;
        height: 18px;
        line-height: 14px;
        padding: 2px;
        border-radius: 8px;
        font-size: 12px;
        color: #fbab15;
    }
    .ivu-menu-dark {
        background: #323f4f;
    }
    .layout-breadcrumb {
    margin: 10px 0 10px 10px;
    padding-bottom: 10px;
    }
    .layout-header{
        padding:0 5%;
        position: absolute;
        height: 40px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        color: #ffffff;
    }
    .layout-logo{
        width: 260px;
        border-radius: 3px;
        float: left;
        position: absolute;
        top: -30px;
        left: 20px;
        height: 60px;
    }
    .layout-logo img{width: 100%;}
    .layout-new-activity{
        float: left;
        position: absolute;
        top: 25px;
        left: 300px;
    }
    .layout-nav{
        margin: 0 auto;
        float: right;
        height: 40px;
        line-height: 40px;
    }
    .layout-content{
        /* min-height: 800px; */
        width: 100%;
        overflow: auto;
        background: #fff;
        height: 100%;
        position: absolute;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .kefuClass{
        width: 120px;height: 120px;
        position: fixed;
        bottom: 100px;
        right: 0;
        z-index: 10000;
        border: 1px solid #ccc;
    }
    .kefuClass img{
        width: 100%;
    }
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
        border-bottom: 2px solid #df9304;
    }
</style>
<template>
    <div class="layout">
        <!-- <Menu mode="horizontal" v-show="!isClient" theme="dark" style=" -webkit-app-region: drag;"  @on-select="accountDown"active-name="currentMenu">
            <div class="layout-header">
                <div class="layout-logo">
                    <p>活码域名管理系统</p>
                </div>
                <div v-if="!navStatus" class="layout-nav">
                    <router-link to="/" replace>
                        <Menu-item name="1">
                            <Icon type="unlocked"></Icon>
                            登录
                        </Menu-item>
                    </router-link>
                    <router-link to="/ContactUs" replace>
                        <Menu-item name="3">
                            <Icon type="android-chat"></Icon>
                            联系客服
                        </Menu-item>
                    </router-link>
                </div>
                <div v-else="navStatus" class="layout-nav">
                    <router-link to="/admin" replace>
                        <Menu-item name="6">
                            后台管理
                        </Menu-item>
                    </router-link>
                    <Submenu name="3" >
                        <template slot="title">
                            个人中心
                        </template>
                        <MenuItem name="loginOut"><Icon type="log-out"></Icon>&nbsp;退出</MenuItem>
                    </Submenu>
                </div>
            </div>
        </Menu> -->

        <div class="layout-content">
            <router-view></router-view>
        </div>
        <!-- <Back-top></Back-top> -->
    </div>
</template>
<script>
    var storage=require('../common/store')
    export default {
        data(){
            return {
                blackList:{}
                , modal1 : false
                , changePasswordM : false
                , formChangePassword : {}
                , ruleValidate : {}
                , sysNotice : ''
                ,closeWindowModal:false
                ,isClient:storage.store.get('isClient')||false //控制是不是在客户端中打开。是就不显示导航栏
                ,currentMenu:''
//                ,version: globalObj.version
                , userLevel: storage.store.get("userLevel")
                , isAgent: storage.store.get("isAgent")
                ,token : storage.store.get('token')
                , pageId :storage.store.get('pageId')
            }
        }
        , mounted : function(){
            if(this.token){
                this.$store.commit('navshow');
            }else{
                this.$store.commit('navhide');
                this.$router.push('login');
            }
        }
        ,computed:{
            navStatus() {//false是未登录的导航 true是登录后的导航
                return this.$store.state.navStatus;
            }
        }
        ,methods: {
            renewActivityConfirm(){
                this. $axios({
                    method:'post'
                    ,url:'/index.php?r=mobile/room-assistant/renew-activity'
                }).then(d=>{
                    // 响应成功回调
                    var udata=d.data;
                    if(udata.status==1){
                        this.$Notice.success({
                            title: '提示',
                            desc: '请根据新活动的需要调整建群设置、重启机器人、创建群'
                        });
                    }
                },function(err){
                    // 响应错误回调
                    /*console.log(err);
                     this.$router.push({name:'buildGgroup'})*/
                });
            }
            , accountDown(name){
                switch (name){
                    case 'accountInfo':
                        this.$router.push('/Account/accountInfo');
                        break;
                    case 'changePassword':
                        this.$router.push('/Account/changePassword');
                        break;
                    case 'invoice':
                        this.$router.push('/Account/invoice');
                        break;
                    case 'order':
                        this.$router.push('/Account/orderList');
                        break;
                    case 'cashCoupon':
                        this.$router.push('/Account/cashCoupon');
                        break;
                    case 'loginOut':
                        storage.store.remove('token');
                        storage.store.remove('pageId');
                        storage.store.remove('isAgent');
                        this.$store.commit('navhide');
                        storage.store.remove('userLevel');

                        if(window.ipcRenderer){
                            window.closeRenderer()
                        }
                        location.href = "/login";
                        break;
                    case 'order':
                        this.$router.push('/order');
                        break;
                }
            }, changePasswordEvent(){

            }
            /* logoutFun(){
                 this.$store.commit('navhide');
                 this.$router.push('/')
             }*/

        }
        ,created:()=>{
        }
    }
</script>


