
import {SET_PARTS} from "../types/menusTypes";

const initialState = {
    parts:[],
    partscard:[],
    partsB:[],
    partscardB:[],
    back:[],
    partsId:"",
}

export const mainPartsReduser = (state = initialState, action) => {
    if (action.type === SET_PARTS){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};