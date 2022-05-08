import axios from 'axios'

// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css" 
console.log(nprogress)

// 1.利用axios对象的方法crate，去创建一个axios实例
const requests = axios.create({
    // 基础路径
    baseURL:'/api',
    // 请求超时时间5秒
    timeout:5000,

});

// 请求拦截器
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start()
    return config
})


// 响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data;
},error=>{
    return Promise.reject(new Error('faile'))
})

export default requests