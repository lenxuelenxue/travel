import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)   // Vue中使用插件通过use形式


export default new Vuex.Store({
    state,
    // actions:{
    //     changeCity(ctx,city){
    //         console.log('city: ', city);
    //         console.log('ctx: ', ctx);
    //         ctx.commit('changeC',city)
    //     }
    // },
    mutations,
    getters:{
        doubleCity(state){
           return state.city + '' + state.city
        }
    }
     
})