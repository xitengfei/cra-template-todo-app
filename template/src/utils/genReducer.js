export default function genReducer(initState, handlers){
    return function reducer(state = initState, action){
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state
    }
}