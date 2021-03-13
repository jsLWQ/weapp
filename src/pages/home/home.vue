<!--  -->
<template>
  <view>{{ title }}</view>
</template>

<script>
import { getIndex } from '@/serverApi/index'

export default {
  data() {
    return {
      title: ''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // console.log(a)
    this.getServe()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  },
  methods: {
    // 测试请求
    getServe () {
      getIndex().then(res => {
        console.log(res)
        this.title = res.data.title
      })
    }
  }
};
</script>
<style>
/* @import url(); 引入css类 */
</style>