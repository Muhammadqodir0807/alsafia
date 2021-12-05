import {SET_CAROUSEL} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";


export function slides (data) {
    return{
        type:SET_CAROUSEL,
        payload:data
    }
}


export const getCarousel = () => (dispatch,getState) => {
    axios.get(API_PATH + "api/ShoppingDayForHomePageCarousel/")
        .then((res) => {
            dispatch(slides({slide:res.data}))
        })
}


export const getCarouselId = (id, history) => {
    // console.log(id)
    // console.log("id,history")
    return function (dispatch,getState) {
        axios.get(API_PATH + "api/ShoppingDayForHomePageCarouselProducts/" + id)
            .then((res) => {
                dispatch(slides({slideId:res.data}))
                history.push("/twooo")
            })
    }
}