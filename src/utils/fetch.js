import axios from 'axios';
import qs from 'qs';
// 创建axios实例 基于promise实现的ajax库
const service = axios.create({
  baseURL:process.env.BASE_API ,//'http://p1.mowork.cn/', // api的base_url
  timeout: 5000                  // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处可设置或自定义请求头部（若需要通过自定义请求头部传参，需后台做options请求）
    //在此处可以对所有的请求头部、主体做统一的处理
    if(config.params){ //get
      console.log(config.params)
    }else{ //post
      console.log(config.data)
    }
    return config;
    }, error => {
      console.log(error);
      Promise.reject(error);
  })
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // console.log(response)
    if (res.rcode !== '0' ) {
      //可在此处根据rcode的值对res做统一处理
      return Promise.reject({description:res.msg});
    } else {
      return res;
    }
  },
  error => {
    console.log( error);
    return Promise.reject({description:'网络异常，请稍后重试'});
  }
)
export default service;
