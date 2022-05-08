import Vue from 'vue';
import Vuex from 'vuex';

// 引入小仓库
import home from './home'
import sreach from './sreach'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        sreach
    }
})