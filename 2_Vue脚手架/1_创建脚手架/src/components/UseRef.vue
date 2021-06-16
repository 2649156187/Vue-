<template>
  <div>
    <!-- 添加ref -->
    <input type="text" ref="msg">
    <button @click="showData">点我提示数据</button>
  </div>
</template>

<script>
export default {
  name: "UseRef",
  data() {
    return {
    }
  },
  methods:{
    showData() {
      // 获取ref
      alert(this.$refs.msg.value)
      this.$refs.msg.focus()
    }
  }
}
</script>

<style scoped>

</style>
