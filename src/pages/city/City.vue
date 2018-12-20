<template>
    <div>
      <CityHeader></CityHeader>
      <CitySearch></CitySearch>
      <CityList :hotCities='hotCities' :cities='cities'></CityList>
      <CityAlphabet :cities='cities'></CityAlphabet>
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
            cities:{}
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
                    console.log(res)
                    this.hotCities=res.data.hotCities
                    this.cities=res.data.cities
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>


