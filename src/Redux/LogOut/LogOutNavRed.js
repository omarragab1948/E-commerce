const initialState = false

const LogOutNavRed = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_NAV_OUT':
            state = !state
            localStorage.setItem('logoutnav', state)
        default: 
            return state
    }
    
}


export default LogOutNavRed