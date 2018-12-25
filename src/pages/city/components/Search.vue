<template>
   <div>
    <div class="search">
        <input class="search-input" type="text" 
        placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref='wrapper' v-show="keyword">
       <ul>
           <li class='search-item border-bottom' v-for="item in list" :key='item.id' @click="handleCityClick(item.name)">{{item.name}}</li>
           <li class='search-item border-bottom' v-show="hasNoData">没有找到匹配数据</li>
       </ul>
    </div>
   </div>
    
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CitySearch',
    data(){
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper)
    },
    props:{
        cities:Object
        
    },
    methods:{
        handleCityClick(city){
          // this.$store.dispatch('changeCity',city)
          this.$store.commit('changeC',city)
          this.$router.push('/')
      }
    },
    watch:{
        keyword(){
            
           if(this.timer){
             clearTimeout(this.timer)
           }
           if (!this.keyword){
               this.list=[]
               return
           }
           this.timer=setTimeout(()=>{
             const result=[]
             for (let key in this.cities){
                 this.cities[key].forEach(item => {
                     if (item.name.includes(this.keyword) || item.spell.includes(this.keyword)){
                        result.push(item)
                     }
                 });
             }
             this.list=result
           },100)
           
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height :.72rem
  padding :0 .1rem
  background :$bgcolor
  .search-input
      width :100%
      height :.62rem
      line-height :.62rem
      text-align :center
      border-radius :.06rem
      color :#666
      padding :0 .1rem
      box-sizing :border-box
.search-content
   z-index :1
   overflow: hidden
   position:absolute
   top:1.58rem
   left:0
   right:0
   bottom:0
   background :#eee
   .search-item   
      line-height :.62rem
      padding-left :.2rem
      color :#666
      background :#fff   
</style>


