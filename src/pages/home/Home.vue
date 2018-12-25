<template>
<div>
  <HomeHeader></HomeHeader>
  <HomeSwiper :swiperList='swiperList'></HomeSwiper>
  <HomeIcons></HomeIcons>
  <HomeRecommend :recommendList='recommendList'></HomeRecommend>
  <HomeWeekend :weekendList='weekendList'></HomeWeekend>
</div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
 export default {
     name:'Home',
     components:{
         HomeHeader,
         HomeSwiper,
         HomeIcons,
         HomeRecommend,
         HomeWeekend
     },
     mounted(){
        this.getHomeInfo()
     },
     data(){
         return {
            // city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
         }
     },
     methods:{
         getHomeInfo(){
             axios.get('/api/index.json').then(res=>{
                 console.log(res)
                 res=res.data;
                 if (res.ret && res.data){
                    // this.city=res.data.city
                    this.swiperList=res.data.swiperList
                    this.iconList=res.data.iconList
                    this.recommendList=res.data.recommendList
                    this.weekendList=res.data.weekendList
                 }
                 
             })
         },
         getHomeInfoSucc(res){
             console.log(res)
         }
     } 
 } 
</script>

<style>
 

</style>