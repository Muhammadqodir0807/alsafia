import {CARDS_INFO, SET_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {inform} from "./mainPartsAction";

export function setState (data) {
    return {
        type: SET_STATE,
        payload: data
    }
}



export  const getCard = () => (dispatch,getState) => {


    axios.get(API_PATH + "api/XitProducts/")
        .then((res) => {


            // dispatch(setState({getCardsId: res.cards}))
            dispatch(setState({cards:res.data.data}))
        })

}


export  const getCardColor = () => (dispatch) => {


    axios.get(API_PATH + "api/ProductsColorByProductId/")
        .then((res) => {
            dispatch(setState({colors:res.data}))
        })

}

export const getCardBack = (id ,history) => {
   return function (dispatch,getState) {
       axios.get(API_PATH + "/api/ProductAllInfo/" +id)
           .then((res) => {
               dispatch(setState({back:res.data.data}))
               // history.push("/three")
           })
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
