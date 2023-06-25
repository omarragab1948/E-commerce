export const AddToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const DeleteProduct = (product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product
    }
}
export const Delete = (product) => {
    return {
        type: 'DELETE',
        payload: product
    }
}

export const Clear = () => {
    return {
        type: 'CLEAR',
    }
}
