import Vue from 'vue'
import Vuex from 'vuex'
var storage=require('../common/store')

Vue.use(Vuex)

const state = {
    navStatus:false
}
const mutations={
    navshow(state){
        state.navStatus=true;
    }
    ,navhide(state){
        state.navStatus=false;
        storage.store.set('token','')
        storage.store.set('pageId','')
    }
}
const actions={

}

const store = new Vuex.Store({
    state,
    mutations
    ,actions
})


export default store