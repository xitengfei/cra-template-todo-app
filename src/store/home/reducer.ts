import genReducer from '@/utils/genReducer';
import Home from './type';
import {ACTION_HANDLERS} from './actions';

const initState: Home = {
    title: 'To Do List',
    todos: [
        {
            task: "Do something",
            priority: 2,
            created: Date.now(),
            completed: false
        },
        {
            task: "Do something else",
            priority: 1,
            created: Date.now(),
            completed: true
        }
    ]
};

export default genReducer(initState, ACTION_HANDLERS)