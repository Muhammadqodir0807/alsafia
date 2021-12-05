import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constans";
import {toast} from "react-toastify";
import {updateState} from "./menusAction";

export function login(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "login/", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem(TOKEN_NAME,res.data.token);
                dispatch({type: ""});
                history.push("/admin/menus");

            })
            .catch((error) => {
                // console.log("XATOLIK")
                toast.error("Xatolik");
            });
    }
}

export const getProducts = () => (dispatch) => {
    axios.get(API_PATH + "api/ProductsColorByProductId/")
        .then((res) => {
            dispatch(updateState({subProduct: res.data}))
        })
}


export function enternumber(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "sendphonenumberpassword/", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem(TOKEN_NAME,res.data.token);
                dispatch({type: ""});
                 history.push("/message");

            })
            .catch((error) => {
                // console.log(error.response)
                 toast.error("Xatolik");
            });
    }
}




