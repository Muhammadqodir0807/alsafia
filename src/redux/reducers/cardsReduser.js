
import {SET_STATE} from "../types/menusTypes";

const initialState = {
    getCardsId:"",
    cards: [],
    cardsIn:[],
    colors:[],
    updateState:"",
    back:[],
    parts:[],
    partscard:[]
}


export const cardsReduser = (state = initialState, action) => {
    if (action.type === SET_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
};