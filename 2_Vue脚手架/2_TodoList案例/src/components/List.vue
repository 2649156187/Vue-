<template>
  <ul class="todo-main">
    <Item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "List",
  components: {Item},
  props:['todos','updateTodo','deleteTodo'],
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}


</style>
