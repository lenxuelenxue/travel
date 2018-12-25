<template>
    <div class="list wrapper" ref="wrapper">
    <div class="content"> 
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                 <div class="button">{{this.currentCity}}</div>
              </div>        
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>   
          <div class="button-list">
              <div class="button-wrapper" v-for="item in hotCities" :key='item.id' @click="handleCityClick(item.name)">
                 <div class="button">{{item.name}}</div>
              </div>     
          </div>  
      </div>
      <div class="area" v-for="(value,key) in cities" :key='key' :ref='key'>
          <div class="title border-topbottom" >{{key}}</div>
          <div class="item-list" v-for="item in value" :key='item.id' @click="handleCityClick(item.name)">
              <div class="item border-bottom">{{item.name}}</div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'CityList',
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    methods:{
      handleCityClick(city){
          // this.$store.dispatch('changeCity',city)
        //   this.$store.commit('changeC',city)
          this.changeC(city)
          this.$router.push('/')
      },
       ...mapMutations(['changeC'])
    },
    watch:{
        letter(){
            if (this.letter) {
                console.log(this.letter,this.$refs,this.$refs[this.letter])
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    computed:{
        ...mapState({
            currentCity:'city'
        })
    }
}
</script>

<style lang="stylus" scoped>
 .border-topbottom
     &:before
         border-color :#ccc
     &:after
         border-color :#ccc   
 .border-bottom
     &:before
         border-color :#ccc   
.list
    position :absolute
    top: 1.58rem
    left:0
    bottom :0
    right :0
    overflow: hidden
 .title
     line-height :.54rem
     background :#eee
     padding-left :.2rem
     color :#666
     font-size :.26rem
 .button-list
     padding :.1rem .6rem .1rem .1rem
     overflow: hidden
     .button-wrapper
        float:left
        width: 33.33%
        .button
            text-align:center
            margin :.1rem
            padding :.1rem 0
            border :.02rem solid #ccc
            border-radius :.06rem 
  .item-list    
     .item
       line-height :.76rem
       padding-left :.2rem      
</style>


