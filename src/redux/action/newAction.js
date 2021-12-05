
import {SET_STATE} from "../types/menusTypes";


export const setState = (data) => {
   return{
       type:SET_STATE,
       payload:data
   }
}