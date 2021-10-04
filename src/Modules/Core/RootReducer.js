import { ManageLocalStorage } from "../../Utils/ManageLocalStorage"
import uuid from "node-uuid";

const rootReducer = (state, action = {}) => {
    const { payload } = action
    if (action.type === 'createTodo') {
        const newArr = [...state.todoList, {...payload,id:uuid.v4()}]
        ManageLocalStorage.set('todoList', newArr)
        console.log(newArr)
        return {
            ...state,
            todoList: newArr
        }

    }
    if (action.type === 'updateTodo') {
        const tempArr = [...state.todoList]
        const index = tempArr.findIndex(el => el.id === payload.id)
         tempArr[index] = payload
        ManageLocalStorage.set('todoList', tempArr)
        return {
            ...state,
            todoList: tempArr
        }
    }
    if (action.type === 'deleteTodo') {

        const tempArr = [...state.todoList]
        const index = tempArr.findIndex(el => el.id === payload.id)
        tempArr.splice(index, 1)
        ManageLocalStorage.set('todoList', tempArr)
        return {
            ...state,
            todoList: tempArr
        }
    }
    if (action.type === 'sortTodo') {
        ManageLocalStorage.set('todoList', payload)
        return {
            ...state,
            todoList: payload
        }
    }
    return { ...state };
}
export default rootReducer;