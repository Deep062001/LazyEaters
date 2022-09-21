
export const addCartItem = (cartItem) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_ITEM', payload: cartItem })
    } catch (error) {
        console.log(error.message);
    }
}


// export const getCartItems = () => async (dispatch) => {
//     try {
//         dispatch({ type: 'GET_ITEMS', payload: cartItem })
//     } catch (error) {
//         console.log(error.message);
//     }
// }