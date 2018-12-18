<template>
    <div class="icons">
    <!-- <swiper> -->
       <!-- <swiper-slide> -->
       <div class="icon" v-for="item in iconList" :key="item.id"> 
         <img class='icon-img' :src="item.imgUrl" alt="">       
          <p class='icon-content'>{{item.desc}}</p>
       </div>  
        
      <!-- </swiper-slide> -->
      <!-- <swiper-slide>
      <div class="icon"> 
         <img class='icon-img' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">       
          <p class='icon-content'>热门景点</p>
       </div> 
      </swiper-slide> -->
      <!-- </swiper> -->
       
        
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data:function(){
      return {
        iconList:[{
          id:'001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id:'002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'北京必游'
        },
        {
          id:'003',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id:'004',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'北京必游'
        },{
          id:'005',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id:'006',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'北京必游'
        },{
          id:'007',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id:'008',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'北京必游'
        }
        ]
      }
    },
    computed:{
      pages(){
        //把一维数组变为二维数组
        const pages=[]
        this.iconList.forEach((item,index)=>{
           const page = Math.floor(index/8)
           if(!pages[page]){
             pages[page]=[]
           }
           pages[page].push(item)
        })
        return pages
      }
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .icons
     display:flex
     flex-direction :row
     flex-wrap:wrap
     .icon
        width:25%
        display:flex
        flex-direction :column
        align-items :center
        justify-content:center
        height: 1.78rem;
        padding-top: .1rem;
        .icon-img
          width: 1.1rem
          height :1.1rem
        .icon-content
          margin-top: .1rem;
          color: $darkTextColor;
          font-size: .28rem;
</style>



