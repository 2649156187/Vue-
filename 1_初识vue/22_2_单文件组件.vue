/* 配置模板结构 */
<template>
  <div>
    <h3 @click="showInfo">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name:'张三'
    }
  },
  methods:{
    showInfo() {
      alert("测试信息")
    }
  }
}
</script>

<style scoped>

</style>
