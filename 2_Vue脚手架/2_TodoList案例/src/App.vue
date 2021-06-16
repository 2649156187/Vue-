<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      carName: '帕萨特'
    }
  },
  methods:{
    showInfo() {
      console.log(this.$refs.useref)
    }
  }
}
</script>

<style scoped>
</style>
