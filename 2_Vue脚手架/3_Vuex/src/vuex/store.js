import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 初始化总状态
const state = {
    sum:0
}

// 创建一个actions 包含n组动作函数
const actions = {
    jia(context,value) {
        context.commit('INCREMENT',value)
    }
}

// 创建mutations  包含n个加工状态的函数
const mutations = {
    INCREMENT(state,value) {
        state.sum += value
    }
}

// 获取store,拥有管理state对象、actions对象、mutations对象
const store = new Vuex.Store({
    state,
    actions,
    mutations
})



export default store