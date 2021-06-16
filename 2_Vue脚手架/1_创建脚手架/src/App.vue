<template>
  <div>
    <Hello/>
    <br>
    <UseRef ref="useref" />
    <!-- 给组件ref会获得VueComponent -->
    <button @click="showInfo" >获取组件ref</button>
    <br>
    <UseProps :carName="carName" />
  </div>
</template>

<script>

import Hello from "@/components/Hello";
import UseRef from "@/components/UseRef";
import UseProps from "@/components/UseProps";

export default {
  name: 'App',
  components:{
    UseProps,
    UseRef,
    Hello
  },
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
