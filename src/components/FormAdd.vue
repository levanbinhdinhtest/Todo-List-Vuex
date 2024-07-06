<template>
  <form>
    <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="What do you want ?" v-model="todolist.action" @keydown.enter.prevent="handleAdd" >
    <div class="input-group-append">
    <button @click="handleAdd" style="background: linear-gradient(90deg, #C9F2FF 0%, #E7F9FF 98.64%);" class="btn btn-outline-secondary" type="button"><i class="fa-solid fa-plus"></i></button>
  </div>
</div>
  </form>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const {mapActions} = createNamespacedHelpers("todolist");
export default {
  data(){
    return{
      todolist:{
        action:""
      }
    }
  },
  methods: {
    handleAdd(){
      this.addTodo(this.todolist);
      this.todolist.action=""
    }
    ,
    ...mapActions({
     addTodo : "addTodoAction"
  }),

  },

}
</script>

<style>
    button:hover i{
        color: black;
    }
</style>