import axios from 'axios'
// 请求封装的几种方法
// 第一种
// export function request(config,success,failure) {
// //1.创建axios的实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000/',
//         timeout:5000
//     })
//     instance(config).then(res=>{
//         // console.log(res);
//         success(res)
//     }).catch(err=>{
//         // console.log(err);
//         failure(err)
//     })
// }
// 第二种
// export function request(config) {
// //1.创建axios的实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000/',
//         timeout:5000
//     })
//     instance(config.baseConfig).then(res=>{
//         // console.log(res);
//         baseConfig.success(res)
//     }).catch(err=>{
//         // console.log(err);
//         baseConfig.failure(err)
//     })
// }
// 第三种，最重要的
// export function request(config) {
// return new Promise((resolve, reject) =>{
//     //1.创建axios的实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000/',
//         timeout:5000
//     })
//     //发送真正的网络请求
//     instance(config).then(res=>{
//        resolve(res)
//     }).catch(err=>{
//         reject(err)
//     })
// })
// }
// 第四种，第三种升级版，终极方案，终极重要
export function request(config) {
// 1.创建axios实例
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000/',
        timeout:5000
    })
    //2.请求拦截器，请求为啥要用
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的小图标
    //3.某些网络请求（比如登录（token））必须携带一些特殊的信息
    instance.interceptors.request.use(config=>{
        console.log(config);
        return config
    },err=>{
        console.log(err);
    })
    //2.2响应拦截，响应为啥要拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data
    },err=>{
        console.log(err);
    })
    //3. 发送真正的网络请求
    return instance(config)
}