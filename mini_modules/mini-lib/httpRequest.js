import globalApi from '@/config/globalApi'

const hostMap = {
  'plulic': 'http://192.168.124.11:3000/',
  'test': '',
  'pre': '',
  'dev': '',
}

let baseUrl = hostMap['plulic']

// get

export async function GET (requestHeader) {
  httpRequest('GET',requestHeader)
}

// post
export async function POST (requestHeader) {
  httpRequest('POST',requestHeader)
}

export async function httpRequest (method, requestHeader) {
  let params = requestHeader.params
  let closeLoading = requestHeader.closeLoading
  if(!closeLoading) {
    globalApi.showLoading({
      title: '加载中...'
    })
  }
  let userInfo = {

  }
  globalApi.request({
    url: baseUrl + requestHeader.url,
    data: {
      ...params
    },
    method,
    header: {},
    success: function (res) {
      // console.log(1222,res.data)
      if(!closeLoading) {
        globalApi.hideLoading()
      }
      if(method == 'JSONP') {
        if(res.data && res.data.indexOf('callback(') > 1) {
          res.data = res.data.replace('callback(', '')
          res.data = res.data.slice(0,res.data.length -1)
          res.data = JSON.parse(res.data)
        }
      }
      if(res.data.code === 1) {
        requestHeader.success(res)
      }else {
        requestHeader.fail(res)
      }
    },
    complete: function () {

    },
    fail: function () {
      if(!closeLoading) {
        globalApi.hideLoading()
      }
      requestHeader.fail()
    },
  })
}