import globalApi from '@/config/globalApi'
import QQMapWX from '@/mini-lib/qqmap-wx-jssdk.min.js'

const WX_MAPSDK_KEY = 'EJ5BZ-JNVC3-LRD37-YA4NT-TVUXH-B3FMJ'

/**
 * 
 * @param { isHighAccuracy }  高精度定位
 * @param { altitude }  高精度定位
 */
export const getLocation = ({ isHighAccuracy, altitude } = { isHighAccuracy: false, altitude: false }) => {
  return new Promise((resolve,reject) => {
    globalApi.getLocation({
      type: 'wgs84',
      isHighAccuracy,
      altitude,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
  
}

// 根据坐标转换位置
export const reverseGeocoder = (res) => {
  return new Promise((resolve,reject) => {
    let qqmapsdk = new QQMapWX({
      key: WX_MAPSDK_KEY // 必填
    });  
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: res.latitude,
        longitude: res.longitude
      },
      success: function (data) {
        resolve(data)
      },
      fail: function (err) {
        reject(err)
      },
      complete: function (res) {
        // console.log(res)
      }
    })
  })
}