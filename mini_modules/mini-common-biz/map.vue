<!--  -->
<template>
  <map
    class="map"
    :subkey="key"
    :scale="scale"
    :longitude="longitude"
    :latitude="latitude"
    :setting="setting"
  >
    <slot></slot>
    <!-- 插槽 -->
    <view id="slot_view">
      <slot name="slot_view"></slot>
    </view>
  </map>
</template>

<script>
export default {
  props: {
    // 经度
    longitude: {
      type: [Number,String],
      default: '116.3972282409668'
    },
    // 纬度
    latitude: {
      type: [Number,String],
      default: '39.90960456049752'
    },
  },
  data() {
    return {
      key: 'EJ5BZ-JNVC3-LRD37-YA4NT-TVUXH-B3FMJ',
      scale: 15,
      setting: {
        skew: 0,
        rotate: 0,
        showLocation: true,
        showScale: false,
        subKey: '',
        layerStyle: 1,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        showCompass: false,
        enable3D: false,
        enableOverlooking: false,
        enableSatellite: false,
        enableTraffic: false,
      }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
// @import url(); 引入css类 
<style lang="less">
.map {
  flex: 1;
  height: 100%;
  #slot_view {
    position: absolute;
    bottom: 16px;
    width: 100%;
  }
}
</style>