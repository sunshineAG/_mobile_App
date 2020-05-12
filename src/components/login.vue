<template>
    <div class="PageIndex">
        <!-- <div class="page1_wrap">
            <div class="card">
                <div>
                    <img src="../assets/def.svg" alt="" class="cp_avatar">
                    <span class="avatar avatar-left">
                        <img src="../assets/cp2.png" alt="" >
                    </span> 
                    <div  class="avatar txtName txtName-left">
                        <span style="display:block">--</span>
                        <span style="display:block">--</span>
                    </div> 
                </div>
                <div>
                    <img src="../assets/def.svg" alt="" class="cp_avatar_o">
                     <span class="avatar avatar-center">
                        <img src="../assets/cp1.png" alt="" >
                    </span>  
                    <div  class="avatar txtName txtName-center">
                        <span style="display:block">--</span>
                        <span style="display:block">--</span>
                    </div> 
                </div>
                <div>
                    <img src="../assets/def.svg" alt="" class="cp_avatar cp_avatar_rt">
                    <span class="avatar avatar-right">
                        <img src="../assets/cp3.png" alt="" >
                    </span>
                    <div  class="avatar txtName txtName-right">
                        <span style="display:block">--</span>
                        <span style="display:block">--</span>
                    </div> 
                </div>
            </div>
        </div>
        <div class="table">
            <p class="tableList">
                <span>1</span>
                <span>
                    <img src="" alt="">
                    <span>微信昵称</span>
                </span>
                <span>
                    54
                </span>
            </p>
        </div>
        <div class="footer">
            <div>
                <img src="../assets/def.svg" alt="">
            </div>
            <div>
                <p>22</p>
                <p>44</p>
            </div>
            <div>
                
            </div>
        </div>
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
                <div class="context" />
            </div>
        </van-overlay> -->
    </div>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                show:true,
                info:[]
            }
        },
        mounted : function(){

        },
        methods:{
            
        },
        created(){
            
        }
    }

</script>
<style scoped lang="less">

    .PageIndex {
        width: 100%;
        height:100%;
        position: relative;
        overflow: hidden;
        background:#D1AF88;
        .page1_wrap{
            background:#EF746C;
            height:170px;
            position:relative;
            .card{
                    width: 96%;
                    border-radius: 5px;
                    height: 200px;
                    display: flex;
                    position: absolute;
                    left: 50%;
                    top: 10%;
                    background:#fff;
                    transform: translate(-50%, 10px);
                div{
                    flex:1;
                    position:relative;
                    text-align:center;
                    position: relative;
                    margin:0;
                    .cp_avatar
                    {
                        position:absolute;
                        top:48px;
                        left:64%;
                        transform: translatex(-50%);
                        width:60px;
                        height:60px;
                    }
                    .cp_avatar_rt{
                        left:34%;
                        transform: translatex(-50%);
                    }
                    .cp_avatar_o{
                        width:84px;
                        height:84px;
                        position:absolute;
                        top:20px;
                        left:50%;
                        transform: translatex(-50%);
                    }
                   .avatar{
                        display: block;
                        width:28px;
                        height:28px;
                        position:absolute;
                        border-radius:100%;
                        line-height:22px;
                        img{
                            width:18px;
                            height:18px;
                            margin:0 auto;
                        }
                        
                        .txtTime{
                           font-size:16px; 
                        }
                    }
                    .avatar-left{
                        background:#92DE89;
                        left:64%;
                        bottom:55%;
                        transform: translate(-50%,110%);
                    }
                    .txtName{
                        display:block;
                        width:40px;
                        font-size:16px;
                        margin-top:14px;
                    }
                    .txtName-left{
                        left: 64%;
                        bottom: 20%;
                        transform: translatex(-50%);
                    }
                    .txtName-center{
                        left: 50%;
                        bottom: 20%;
                        transform: translatex(-50%);
                    }
                    .txtName-right{
                        left: 32%;
                        bottom: 20%;
                        transform: translatex(-50%);
                    }
                    .avatar-center{
                        background:#FF9800;
                        width:34px;
                        height:34px;
                        line-height:30px;
                        bottom:60%;
                        left:50%;
                        transform: translate(-50%,110%);
                        img{
                            width:20px;
                            height:20px;
                            margin:0 auto;
                        }
                    }
                    .avatar-right{
                        background:#BA81EB;
                        bottom:55%;
                        left:33%;
                        transform: translate(-50%,110%);
                    }
                }
            }
        }
        .table{
            width:96%;
            margin:0 auto;
            background:#fff;
            border-radius:5px;
            height: 78%;
            margin: 79px auto;
            // overflow: auto;
            font-size:16px;
            .tableList{
               display: flex;
               padding:20px;               
               border-bottom:1px solid #f0f0f0;
               margin:0;
                span{
                    flex:1;
                    text-align:center;
                }
                span:nth-child(2){
                    flex:4;
                    text-align:left;
                }
            }
        }
        .context{
        position:absolute;
        top:190px;
        left:50%;
        transform: translatex(-50%);
        width:280px;
        height:166px;
        background:#fff;
        border-radius:5px;
        z-index:3;
        }
        .footer{
            width:100%;
            height:50px;
            box-shadow: 0 0 10px rgba(0,0,0,.5);
            background:#B3895D;
            position:absolute;
            bottom:0;
            display: flex;
            div{
                flex:2;
                font-size:14px;
            }
            div:nth-child(1){
                flex:1;
                img{
                    width:50px;
                    height:50px;
                    margin-top:-26px;
                    margin-left:10px;
                }
            }
            div:nth-child(2){
                padding-top:3px;
                p{
                    padding-top:2px;
                    margin:0;
                }
            }
        }
    }
    
</style>
