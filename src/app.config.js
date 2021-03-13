export default {
  pages: [
    'pages/index/index',
    'pages/home/home'
  ],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于展示当前定位" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
