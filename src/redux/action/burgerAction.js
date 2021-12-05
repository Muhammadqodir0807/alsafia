import {SET_BURGER} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constans";


// const jsonList=API_PATH +"api/ProductInfo/"

export function setBurger(data) {
    return{
        type:SET_BURGER,
        payload:data
    }
}

export const getBurger = () => (dispatch, getState) => {
    axios.get(API_PATH + "api/Allcategory/")
        .then((res) => {
            dispatch(setBurger({menus:res.data.data}))
        })
}


export const getBurgerId = (id, history) => {


    return function (dispatch , getState) {
        axios.get(API_PATH + "api/ProductsByCategoryId/" + id)
            .then((res) => {
                console.log(res.data)
                dispatch(setBurger({menusId:res.data}));
                    // history.push("/categorypage")


            })
    }
}




export const onSubmit =  (input) =>  {
    return async function  (dispatch,getState) {
        await axios.get(API_PATH + 'api/SearchProducts/' + input)
            .then((res) => {
            dispatch(setBurger({filter: res.data}))
        })
    }
}



//
// function search(jsonList, searchText) {
//     return jsonList.filter(function(x) {
//         for (var i in x) {
//             if (x[i].toLowerCase().indexOf(searchText.toLowerCase()) > -1) return x;
//         }
//     })
// }
// console.log(search(jsonList, 'search'))





