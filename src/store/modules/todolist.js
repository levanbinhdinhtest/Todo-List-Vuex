import { deleteTodoApi, getAllListApi, postToDoApi } from "@/apis/todolist";

const state = ()=>{
    return{
        todoList:[]
    }
};
const getters = {

};

const mutations = {
    getAllListMutations(state,value){
        state.todoList = value;
        // console.log(value)
    }
};
const actions = {
    async getAllListAction(context){
        const value = await getAllListApi();
        context.commit("getAllListMutations",value);
    },
    async deleteItemAction(context,value){
        await deleteTodoApi(value);
        // console.log(res);
        context.dispatch("getAllListAction");
    },
    async addTodoAction(context,value){
        await postToDoApi(value);
        // console.log(res);
        context.dispatch("getAllListAction");
    },
    async deleteItemCheckedAction(context, itemsToDelete) {
        for (const element of itemsToDelete) {
            try {
                await deleteTodoApi(element);
                // console.log(res);
            } catch (error) {
                console.error("Error deleting item:", error);
                // Xử lý lỗi nếu cần
            }
        }
        // Sau khi xóa xong, gọi lại action để cập nhật danh sách
        context.dispatch("getAllListAction");
    }
    
};
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
