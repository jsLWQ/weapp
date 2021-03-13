import taro, { Events } from '@tarojs/taro'

const globalApi = Object.assign({},{
  ...taro,
  Events,
  setTitle (title) {
    taro.setNavigationBarTitle({
      title
    })
  }
})

export default globalApi

