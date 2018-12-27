<template>
  <div>
    <div class="banner" @click='show'>
      <img class="banner-img"
      :src="bannerImg" alt="">
      <div class="banner-info">
          <div class="banner-title">{{sightName}}</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{imgs.length}}</div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @click.native='hideGallary'></CommonGallary>
  </div>
    
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    props:{
        bannerImg:String,
        imgs:Array,
        sightName:String
    },
    data(){
       return {
        //    imgs:['http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_600x330_682f736a.jpg','http://img1.qunarzz.com/sight/p0/1712/71/71ace1aa7d971212a3.water.jpg_600x330_5ff0b4e8.jpg'],
           showGallary:false
       }
    },
    methods:{
         show(){
             this.showGallary=true
         },
         hideGallary(){
             this.showGallary=false
         }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
  .banner
     position :relative
     overflow: hidden
     height :0
     padding-bottom :55%
    .banner-img
      width :100%
    .banner-info  
       display :flex
       position:absolute
       left :0
       right :0
       bottom :0
       line-height :.6rem
       color:#fff
       background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
       .banner-title
        flex :1
        font-size :.32rem
        padding :0 .2rem
       .banner-number
         margin-top :.14rem
         padding :0 .4rem
         height :.32rem
         line-height :.32rem 
         border-radius: .2rem
         background :rgba(0,0,0,.8)
         font-size :.24rem
         .banner-icon
           font-size :.24rem

</style>

