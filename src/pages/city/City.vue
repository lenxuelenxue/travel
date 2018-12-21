<template>
    <div>
      <CityHeader></CityHeader>
      <CitySearch :cities='cities'></CitySearch>
      <CityList :hotCities='hotCities' :cities='cities' :letter='letter'></CityList>
      <CityAlphabet :cities='cities' @change="changeList"></CityAlphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            hotCities:[],
            cities:{},
            letter:''
        }
    },
    mounted(){
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
                console.log(res)
                res=res.data
                if (res.ret && res.data){
                    this.hotCities=res.data.hotCities
                    this.cities=res.data.cities
                }
            })
        },
        changeList(e){
         
          this.letter=e
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>


