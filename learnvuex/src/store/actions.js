export default {
  // context上下文
  // updadaInfo(context,payload){
  //   setTimeout(()=>{
  //     context.commit('updataInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   },1000)
  // }
  updadaInfo(context,payload){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        context.commit('updataInfo')
        console.log(payload);
        resolve('2222')
      },1000)
    })
  }
}
