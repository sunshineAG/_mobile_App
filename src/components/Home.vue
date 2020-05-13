<template>
    <div class="PageIndex">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-sticky @scroll="fn(`123`,$event)" container="PageIndex" >
            <div v-show="yindao" class="test" ref="yindao">
                <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
            </div>  
            <van-tabs >
                
                <van-tab v-for="index in 8" :title="'标签直播长度' + index" :key="index">
                    <div class="subTitle">
                        <van-tabs >
                            <van-tab v-for="index in 8" :title="'标签直播长度' + index" :key="index">
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-tab>
            </van-tabs>
        </van-sticky>
        <div @click="test">tiao</div>
    </div>
</template>
<script>
    import { Skeleton ,Loading,Sticky,Button,Swipe,SwipeItem,Tab,Tabs,DropdownMenu, DropdownItem} from 'vant';

    export default {
        name: 'home',
        components:{
            [Skeleton.name]:Skeleton,
            [Loading.name]:Loading,
            [Sticky.name]:Sticky,
            [Button.name]:Button,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [DropdownMenu.name]:DropdownMenu,
            [DropdownItem.name]:DropdownItem,
        },
        data () {
            return {
             loading: true,
             yindao:true,
             active:0,
             value1: 0,
            value2: 'a',
            arr:[],
            option1: [
                { text: '体育直播', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            }
        },
        mounted : function(){
            
        },
        methods:{
            test(){
                //this.$router.push('/SiteSearch')

                this.$axios({
                    method:'GET',
                    url:'http://localhost:8001/' + 'user/info'
                }).then(res=>{
                    console.log(res)
                })
            },
            fn(v,e){
                //this.$router.push('/SiteSearch')
                // this.arr.push(e)
                // if(!e.isFixed){
                //     this.$nextTick(()=>{ this.$refs.yindao.style.left = parseInt( -140 + this.arr.length*2) + 'px' })
                // }else{
                //     this.$nextTick(()=>{ this.$refs.yindao.style.left = parseInt( 140 - this.arr.length*2) + 'px' })
                // }
                
            }
        },
        created(){
        
        }
    }

</script>
<style>
    .PageIndex .van-tabs__nav{
        margin-left:122px;
        background:none;
    }
    .subTitle .van-tabs__nav{
        margin-left:0;
    }
    .van-tabs__wrap{
        background:rgb(68, 158, 231);
    }
    .subTitle .van-tabs__wrap{
        background:rgb(255, 255, 255);
    }
    .van-tab{
        z-index:1;
        color:#fff;
    }
    .subTitle .van-tab{
        z-index:1;
        color:#ccc;
    }
    .subTitle .van-tab--active span{
        color:rgb(235, 235, 235);
    }
    .van-tab--active span{
        color:rgb(127, 118, 250) ;
    }
    
    .van-tabs__nav .van-tabs__line{
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 0;
        width: 60px !important;
        height: 48px;
        background-color: #fff;
        border-radius: 16px 16px 0 0;
    }

    .subTitle .van-tabs__nav .van-tabs__line{
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        z-index: 0;
        width: 90px !important;
        height: 40px;
        line-height:40px;
        background-color: rgb(73, 126, 204);
        border-radius: 50px;
        margin-bottom:2px
    }
    [class*=van-hairline]::after{
        border:0;
    }
</style>
<style scoped lang="less">
    
    .PageIndex {
        width: 100%;
        height:2000px;
        position: relative;
        overflow: hidden;
        background:#D1AF88;
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }
        .van-dropdown-menu{
            height:34px;
            margin-top:5px;
            border-radius:0 20px 20px 0;
        }
        .test{
            width:120px;
            position:absolute;
            left:-90px;
            z-index:2; justify-content: center;
        }
        .box{
            width:350px;
            height:200px;
            background:#ccc;
            margin:0 auto;
            font-size:14px;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
            border:0;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
            border:0;
        }
        
    }
    
</style>
