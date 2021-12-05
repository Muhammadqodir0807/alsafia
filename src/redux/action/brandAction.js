import {SET_BRAND} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";


export function setBrand(data) {
    return{
        type:SET_BRAND,
        payload:data
    }
}


export const getBrand = () => (dispatch) => {
    axios.get(API_PATH + "api/Brand/")
        .then((res) => {
            dispatch(setBrand({images:res.data}))
        })
}


export const getBrandId = (id, history) => {
    return function (dispatch,getState) {
        axios.get(API_PATH + "api/ProductsByBrandId/" + id)
            .then((res) => {
                dispatch(setBrand({imageId:res.data.data}));
                history.push("/four");
            })
    }
}