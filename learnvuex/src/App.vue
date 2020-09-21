<template>
  <div id="app">
        <h2>---------------app内容---------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>---------------modules中的内容---------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="updataename">修改modules中的内容</button>
    <button @click="aupdatename">异步修改名字</button>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
        <h2>---------------vuex内容--------------</h2>
    <Hellowvuex></Hellowvuex>
        <h2>-----------app内容：getters使用-------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>获取年龄大于20岁的学生</h2>
       <h2>{{$store.getters.more20stu}}</h2>
    <h2>获取年龄大于20岁的学生个数</h2>
    <h2>{{$store.getters.more20stulength}}</h2>
    <h2>手动输入年龄过滤</h2>
    <h2>{{$store.getters.moreAgestu(25)}}</h2>
    <button @click="addStudent">添加学生</button>
    <button @click="updataInfo">修改信息</button>
    <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
  import Hellowvuex from './components/Hellowvuex'
export default {
  name: 'App',
  data(){
    return{
      message:'我是app组件',
    }

  },
  computed:{
    // more20stu(){
    //   return this.$store.state.students.filter(s=> s.age>=20)
    // }
  },
  components:{
    Hellowvuex
  },
  methods:{
    addition(){
      //向vuex提交
       this.$store.commit('increment')
    },
    subtration(){
      // 普通的提交方法
      this.$store.commit('decrement')
      // 特殊的提交方法
      // this.$store.commit({
      //   type:'decrement'
      // })
    },
    addStudent(){
      // payload:负载
      const stu={id:114,name:'fff',age:35}
      this.$store.commit('addStudent',stu)
    },
    updataInfo(){
      // 通过mutations
      // this.$store.commit('updataInfo')
      // 经过actions
      // this.$store.dispatch('updadaInfo',{
      //   message:'我是payload',
      //   success:()=>{
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store.dispatch('updadaInfo','我是payload').then(res=>{
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updataename(){
      this.$store.commit('updatename','李四')
    },
    aupdatename(){
      this.$store.dispatch('aupdateName')
    }

  }
}
</script>

<style>

</style>
