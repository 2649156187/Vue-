<template>
  <li
      @mouseenter="isEnter = true"
      @mouseleave="isEnter = false"
      :class="{'todo-empty':isEnter}"
  >
    <label>
      <input type="checkbox" v-model="todo.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button
        class="btn btn-danger"
        :style="{display:isEnter ? 'block':'none'}"
        @click="deleteTodo(todo.id)"
    >删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:['todo','updateTodo','deleteTodo'],
  data() {
    return {
      isEnter: false,
    }
  }
}
</script>

<style scoped>
/*item*/
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.todo-empty {
  background: #cccccc;
}


</style>
