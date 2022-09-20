import * as api from '../api/index';

export const getFoodItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFoodItems();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
