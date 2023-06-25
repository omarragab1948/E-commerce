const initialState = [];

const handleCart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const findProduct = state.find((product) => product.id === action.payload.id)
            localStorage.setItem('product', action.payload.id)
            if (findProduct) {
                return state.map((product) => 
                    product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
                )
            } else {
                return [...state, action.payload]
            }
        case 'DELETE':
            const findProduct2 = state.find((product) => product.id === action.payload.id)
            if (findProduct2.quantity === 1) {
              return state.filter((product) => product.id !== action.payload.id)
            } else {
                return state.map((product) => 
                    product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product
                )
            }
        case 'DELETE_PRODUCT':
            return state.filter((product) => product.id !== action.payload.id)
        case 'CLEAR':
            return state = []
        default:
            return state
    }
}
export default handleCart
