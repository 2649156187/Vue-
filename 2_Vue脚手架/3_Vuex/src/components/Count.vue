<template>
  <div>
    <h2>当前求和为{{ $store.state.sum }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">基数+</button>
    <button @click="incrementAsync">异步-</button>
    <br>
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return{
      num: 1
    }
  },
  methods:{
    increment() {
      this.$store.dispatch('jia',this.num)
    },
    decrement() {

    },
    incrementOdd() {

    },
    incrementAsync(){

    },
    test() {
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>