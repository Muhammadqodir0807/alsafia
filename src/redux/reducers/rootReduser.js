import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {menusReducer} from "./menusReducer";
import {cardsReduser} from "./cardsReduser";
import {mainPartsReduser} from "./mainPartsReduser";
import {carouselReduser} from "./carouselReduser";
import {brendsReduser} from "./brandReducer";
import {burgerReduser} from "./burgerReduser";


export const rootReducer = combineReducers({
    login: loginReducer,
    menus:menusReducer,
    cardsR:cardsReduser,
    partM:mainPartsReduser,
    carousel:carouselReduser,
    brends:brendsReduser,
    burger:burgerReduser,



});