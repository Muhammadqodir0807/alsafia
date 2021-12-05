import {UPDATE_STATE} from "../types/menusTypes";

const initialState = {
    open:false,
    url: "",
    submenu:false,
    subModals:[],
    subProduct:[]
};


export const menusReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
                ...action.payload
        }
    }

    return state;
};