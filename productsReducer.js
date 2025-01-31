import { ADD_PRODUCT } from "./productsActions";
const initState = {
    items: [],
};
const productsReducer = (state = initState, action) =>{
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state, items:
                [...state.items, action.payload],
            };
            default: return state;
    }
};
export default productsReducer;