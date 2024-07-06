import { createStore } from 'vuex'
import todolist from './store/modules/todolist';
const store = createStore({
    modules:{
        todolist, 
    }

  })
export default store;