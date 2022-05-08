import { reqCategoryList } from "@/api"

const state = {
    categoryList:[]
}

const mutations = {
    CATGORYLIST (state,categoryList) {
        state.categoryList = categoryList;
    }
}

const actions = {
    async reqCategoryList ({commit}) {
        let result = await reqCategoryList();
        if(result.code === 200) {
            commit("CATGORYLIST",result.data)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}