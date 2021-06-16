<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo" />
        <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo"/>
        <Footer :todos="todos" :updateTodo="updateTodo" :clearEnd="clearEnd"/>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import List from "@/components/List";

export default {
  name: 'App',
  // 注册组件
  components: {List, Footer, Header},
  data() {
    return {
      todos:[
        {id:'001',title:"抽烟",done:true},
        {id:'002',title:"喝酒",done:false},
        {id:'003',title:"烫头",done:true}
      ]
    }
  },
  methods:{
    // 添加todo
    addTodo(data) {
      this.todos.unshift(data)
    },
    // 更新Todo中的done
    updateTodo(id, done) {
      if (id === 'all') {
        console.log("全选")
        this.todos = this.todos.map(todo => {
          return {...todo,done}
        })
      } else {
        this.todos = this.todos.map(todo => {
          if (id === todo.id) return {...todo,done}
          else return  todo
        })
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id!==id)
    },
    clearEnd() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  }
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
