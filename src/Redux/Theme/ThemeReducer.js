const initialState = {
    mode: false
}
const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRUE':
            return {
                mode: !state.mode
            }
        default: 
            return state
    }
}

export default ThemeReducer