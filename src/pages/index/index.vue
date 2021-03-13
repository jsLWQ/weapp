<template>
  <view class="index">
    <Map
      :longitude="longitude"
      :latitude="latitude"
    >
      <view class="mapTpo">
        当前位置是：{{ mapReverse }}
      </view>
      <view slot="slot_view">
        <button class="btn" @tap="handleGo">跳转</button>
      </view>
    </Map>
  </view>
</template>

<script>
import taro from '@tarojs/taro'
import Map from '@/mini-common-biz/map'
import { getLocation,reverseGeocoder } from '@/mini-lib/lib'

export default {
  components: {
    Map
  },
  data () {
    return {
      msg: 'Hello world!',
      longitude: '',
      latitude: '',
      mapReverse: ''
    }
  },
  created () {
    this.getLocation()
  },
  methods: {
    handleGo () {
      taro.navigateTo({
        url: '/pages/home/home'
      })
    },
    // 获取定位
    async getLocation() {
      const res = await getLocation()
      console.log('getLocation',res)
      let { longitude, latitude } = res
      this.latitude = latitude
      this.longitude = longitude
      const reverse = await reverseGeocoder(res)
      console.log('reverse',reverse)
      this.mapReverse = reverse.result.formatted_addresses.recommend
    }
  }
}
</script>
<style lang="less">
.index {
  display: flex;
  height: 100vh;
  .mapTpo {
    background: #fff;
    border-radius: 8px;
    min-height: 80px;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: #333;
  }
  .btn {
    width: 713px;
    color: #fff;
    background: skyblue;
    border-radius: 8px;
  }
}
</style>
