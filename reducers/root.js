const initState = {
    title: 'Doshi',
    name: ''
}

function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'FETCH_STATE' :
            return state
        default:
            return state
    }
}

export default rootReducer