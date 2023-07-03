import { ADD_ITEM, DELETE_ITEM, RESET_ITEM } from "../actionTypes/actionTypes";

const defaultState = {
    itemsCount: 0,
};

export const itemReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemsCount: state.itemsCount +1,
            };
        case DELETE_ITEM:
            return {
                ...state,
                itemsCount: state.itemsCount -1,
            };
        case RESET_ITEM:
            return {
                ...state,
                itemsCount: 0,
            };
        default:
            return state;
    }

};