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
  
</style>
<template>
    <div class="layout">
        <div class="layout-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    var storage=require('../libs/store')
    export default {
        data(){
            return { }
        },
        mounted : function(){
             this.$router.push('home');
        },
        computed:{},
        methods: {
            eg(){
                this. $axios({
                    method:'post',
                    url:''
                }).then(d=>{
                    
                },(err)=>{
                    
                });
            }
        }
    }
</script>


