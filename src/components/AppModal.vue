<template>
  <div class="container">
        <h1>TODOLIST</h1>
        <form-add/>
        <todo-list/>
        <!-- <button class="btn btn-danger" @click="deleteChecked(tickedItems)">
            Remove Checked
        </button> -->
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';
// const {mapActions} = createNamespacedHelpers("todolist");
import FormAdd from './FormAdd.vue'
import TodoList from './TodoList.vue'
export default {

  components: { FormAdd, TodoList },
  // data() {
  //     return {
  //         tickedItems: []
  //     }
  // },
  // methods:{
      // ...mapActions({
      //   deleteChecked : "deleteItemCheckedAction"
      // }),
      // handleCheckedList(tickedItems){
      //   this.tickedItems = tickedItems;
      //     console.log(this.tickedItems)
      // }
  // }
}
</script>

<style>
    .container{
        background: white;
        padding: 10px 20px;
    }
</style>