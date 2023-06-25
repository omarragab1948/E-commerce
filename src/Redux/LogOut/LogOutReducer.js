const initialState = false

const LogOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_OUT':
            state = !state
            localStorage.setItem('logout', state)
        default: 
            return state
    }
    
}
export default LogOutReducer