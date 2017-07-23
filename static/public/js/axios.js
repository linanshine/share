// import axios from 'axios'

var options = {
  baseURL: 'http://10.131.20.126:8080/indivbusi/',
  timeout: 30000,
  headers: {'content-type': 'text/html'}
}

var api = axios.create(options)

api.interceptors.request.use(function (request) {
  if (request.url.indexOf('.json') != -1) {
    request.url = request.url.replace(request.baseURL, '')
  }

  // 在请求发送之前做一些事
  return request
}, function (error) {
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
  // 对返回的数据进行一些处理
  return response
}, function (error) {
  util.showDialogPlug('现在参与的小伙伴太多了，请您稍后再试！', '知道啦')
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})

// export default api
