import * as Redux from 'redux';
// import API from '@/api/api';

import Home from './type';
// import {RootState} from '@/store/';
// import ToDo from '@/models/ToDo';

const defaultTaskPriority = 1;

// ===============================
// Action Type
// ===============================
export const HOME_ADD_TODO = 'HOME_ADD_TODO'
export const HOME_RM_TODO = 'HOME_RM_TODO'


// ===============================
// Action Creator
// ===============================
// export const toggleTodoStatus = function( task ) {
//     task.updated = Date.now();
//     task.completed = !task.completed;
// }

/**
 * ADD ToDo Item
 * @param taskName 
 */
export const addToDo = function(taskName: string){
    return async (dispatch: Redux.Dispatch, /*getState: () => RootState*/) => {
        if (!taskName.trim().length ) return;
        
        const newTask = {
            task: taskName,
            priority: defaultTaskPriority,
            created: Date.now(),
            completed: false
        };

        return dispatch({
            type: HOME_ADD_TODO,
            payload: newTask
        })
    }
}


/**
 * export all action creators
 */
export default {
    addToDo,
}

// ===============================
// Action Handlers
// ===============================
type Action = {type: string, payload: any};
export const ACTION_HANDLERS = {
    [HOME_ADD_TODO]: (state: Home, {payload}: Action): Home => {
        const todos = state.todos.concat(payload);
        return Object.assign({}, state, {todos});
    }
}