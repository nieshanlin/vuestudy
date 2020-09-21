export default {
  state:{
    name:'张三'
  },
  mutations:{
    updatename(state,payload){
      state.name=payload
    }
  },
  actions:{
    aupdateName(context){
      setTimeout(()=>{
        context.commit('updatename','王五')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name+'1111'
    },
    fullname2(state,getters){
      return getters.fullname+'222'
    },
    fullname3(state,getters,rootState){
      //获取根节点的counter拼接上
      return getters.fullname2+rootState.counter
    }
  }
}
