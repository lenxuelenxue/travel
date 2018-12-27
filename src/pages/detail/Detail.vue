<template>
    <div>
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
        
        <div class="content">
        <DetailList :list='list'></DetailList>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[{
              title:'成人票',
              children:[{
                  title:"成人三馆",
                  children:[{
                      title:'成人三馆-某也'
                  }]
              },{
                  title:"成人五馆"
              }]
            },{
                title:'学生票'
            },{
                title:'儿童票'
            },{
                title:'特惠票'
            }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
   .content
      height :50rem

</style>

