<template>
  <div class="item container ">
        <div class="row">
          <label class=" col-lg-6">
            <input type="checkbox" class="form-check-input" :name="todo.action" :value="todo.id" @change="handleTick" :checked="isTicked">
            {{ todo.action }}
          </label>
          <div class="action col-lg-3 offset-lg-3">
            <i class="fa-solid fa-xmark" @click="deleteItem(todo.id)"></i>
          </div>
        </div>
  </div>
  
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {mapActions} = createNamespacedHelpers("todolist");
export default {

    props:{
        todo:{
            type: Object,
            requried : true
        },
        // truyền thêm tickedItems để kiểm tra xem mục đã tick hay chưa
        tickeditems: {
          type: Array,
          required: true
    }
      
    },
    computed: {
      isTicked() {
        return this.tickeditems.includes(this.todo.id);
      }
    },
    methods:{
      ...mapActions({
        deleteItem : "deleteItemAction",
      }),
      handleTick() {
        this.$emit('update-ticked', this.todo);
    }
    },


}
</script>

<style>
    .item:hover {
        background: rgb(228, 219, 219);
    }
    label{
        text-align: left;
    }
    .action{
        text-align: right;
    }
    i:hover{
      font-size: 20px;
      font-weight: 700;
    }
</style>