import {SET_PARTS} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {setState} from "./cardsAction";



export function inform (data) {
    return{
        type:SET_PARTS,
        payload:data
    }
}


export const getParts = () =>  (dispatch,getState) => {
     axios.get(API_PATH +"api/MainPagePromoForHomePage/" )
        .then((res) => {
            dispatch(inform({parts:res.data}))
        })
}


export const getPartsId = (id, history) => {

   return function(dispatch, getState) {
       axios.get(API_PATH +"api/MainPagePromoForHomePageProducts/" + id )

           .then((res) => {
               dispatch(inform({partscard:res.data}))
               history.push("/two")
           })
   }
}



export const getCardBack = (id ,history) => {
    return function (dispatch,getState) {
        axios.get(API_PATH + "/api/ProductInfo/" +id)
            .then((res) => {
                dispatch(setState({back:res.data.data}))
                // history.push("/three")
            })
    }
}


export const getPartsB = () =>  (dispatch,getState) => {
    axios.get(API_PATH +"api/MainPagePromoForHomePageSlider/" )
        .then((res) => {
            dispatch(inform({partsB:res.data}))
        })
}

export const getPartsIdss = (id, history) => {
    console.log('brand', id)
    return function(dispatch, getState) {
        axios.get(API_PATH +"api/MainPagePromoForHomePageSliderProducts/" + id )

            .then((res) => {
                dispatch(inform({partscard:res.data}))
                history.push("/two")
            })
    }
}