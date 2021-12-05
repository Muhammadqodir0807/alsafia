import React from 'react';
import ReactDOM from 'react-dom';


import  'bootstrap/dist/css/bootstrap.min.css';

import './sass/main-admin.scss'



import 'semantic-ui-css/semantic.min.css'

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReduser";
import 'react-toastify/dist/ReactToastify.css';
import thunk from "redux-thunk";

import MainRoot from "./Components/MainRoot";
import MainParts from "./Components/HomePage/MainParts";

import AppF from "./Components/Filters";

import './sass/main.scss'

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =createStore(rootReducer, compose(applyMiddleware(thunk) ));




ReactDOM.render(
    <Provider store={store}>
    <MainRoot/>
    </Provider>
    , document.getElementById('root'));


