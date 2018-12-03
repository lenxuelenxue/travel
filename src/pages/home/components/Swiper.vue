<template>
  <div class="wrapper">
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key='item.id'>
        <img class='swiper-img' :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- <swiper-slide>
        <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg" alt="">
    </swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
   </swiper>
  </div>
    
</template>

<script>
export default {
    name:'HomeSwiper',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperList:[
            {
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'
            },
            {
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
            }
        ]
      }
    
}
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
       background :#fff
 .wrapper
   
  .swiper-img
    width : 100%
</style>


