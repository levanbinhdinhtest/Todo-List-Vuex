<template>
    <div>
        <div v-for="(todo,index) in todoList" :key="index" >
            <todo-item  :todo="todo" :tickeditems="tickedItems" @update-ticked="updateTicked"/>
        </div>
        <!-- <button class="btn btn-success" @click="sendDataToAppModal">Completed</button> -->
        <!-- <p>Number of items ticked: {{ tickedItems.length }}</p>
        <p>Ticked items: {{ tickedItems }}</p> -->
        <button class="btn btn-danger" @click="deleteChecked(tickedItems)">
            Remove Checked
        </button>
    </div>

</template>

<script>
import TodoItem from './TodoItem.vue'
import { createNamespacedHelpers } from 'vuex';
const {mapActions, mapState} = createNamespacedHelpers("todolist");
export default {
    data() {
    return {
      tickedItems: [] ,// Array to store ticked items,


    };
  },
    components:{
        TodoItem,

    },
    computed:{
        // ...mapGetters({
        //     list : "todoList"
        // })
        // ,
        ...mapState({
            todoList :(state) => state.todoList,
        })
    }
    ,
    methods:{
        ...mapActions({
            getAllList : "getAllListAction",
             deleteChecked : "deleteItemCheckedAction"
        }),
        updateTicked(todo) {
            if (this.tickedItems.includes(todo.id)) {
                this.tickedItems = this.tickedItems.filter(item => item !== todo.id);
            } else {
                 this.tickedItems.push(todo.id);
            }
        },
    },
    created(){
        this.getAllList();
    }
}
</script>

<style>

</style>