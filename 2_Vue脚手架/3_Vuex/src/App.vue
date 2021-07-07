<template>
  <div>
    <Count />
  </div>
</template>

<script>
// 引入组件

import Count from "./components/Count";
export default {
  name: 'App',
  components: {Count},
  // 注册组件
}
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
