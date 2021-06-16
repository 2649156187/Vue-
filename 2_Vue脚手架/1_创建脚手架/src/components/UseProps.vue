<template>
  <div>
    <h2>data中：{{ name }}</h2>
    <h2>props中：{{ carName }}</h2>
    <button @click="showInfo">输出props</button>
  </div>
</template>

<script>
export default {
  name: "UseProps",

  /*props:{
    // 声明接受Props -- 完整写法：限制类型，控制必要性，指定默认值
    carName:{
      type: String,
      required: true,
      default: '迈腾'
    },
    // 限制类型
    username: String,
  },*/
  // 啥也不限制
  props:['carName'],
  data() {
    return {
      name:"张三"
    }
  },
  methods:{
    showInfo() {
      console.log(this)
    }
  }

}
</script>

<style scoped>

</style>
