<template>
    <div>
        <DetailBanner :bannerImg='data.bannerImg' :imgs='data.gallaryImgs' :sightName='data.sightName'></DetailBanner>
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
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[],
            bannerImg:'',
            categoryList:[],
            gallaryImgs:[],
            data:''
        }
    },
    mounted(){
        this.getDetailInfo()
    },
    // activated(){
    //    this.getDetailInfo()
    // },
    methods:{
        getDetailInfo(){
            console.log(this.$route.params.id)
           axios.get('/api/detail.json',{
               params:{
                   id:this.$route.params.id
               }
           }).then(result=>{
               console.log('result: ', result);
                result=result.data
                if(result.ret && result.data){
                  this.list=result.data.categoryList
                   this.data=result.data
                }
               
           })
        }
    }
}
</script>

<style lang="stylus" scoped>
   .content
      height :50rem

</style>

