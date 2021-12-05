import {SET_CAROUSEL} from "../types/menusTypes";

const initialState = {
  slide:[],
    slideId:[],
};

export const carouselReduser = (state = initialState, action) => {
    if (action.type === SET_CAROUSEL){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}