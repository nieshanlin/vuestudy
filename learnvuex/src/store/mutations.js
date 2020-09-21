export default {
  //提交方法官方指定函数
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updataInfo(state){
    state.info.name="聂山林"
  }
}
