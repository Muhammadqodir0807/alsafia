import React, {Component, useEffect, useState} from 'react';
import Navbar from "../Nav";
import Footer from "../Footer";
import CarouselMain from "./Carousel-main";
import App from "./Carousel-main";
import Cards from "../Cards";
import ModalExample from "../Data";
import CardsMain from "./CardsMain";
import MainParts from "./MainParts";
import Brends from "./Brends";
import {connect} from "react-redux";
import {inform,getPartsB, getPartsIdss} from "../../redux/action/mainPartsAction";


import Wildberries from "../Wildberries";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constans";



const Home = (props) => {

    useEffect(() => {
        props.getPartsB();
    },[])


        return (


            <div className="home">
                <Navbar history={props.history}/>
                <div className="main-part p-5 pt-0">
              <CarouselMain history={props.history}/>

                <MainParts history={props.history}/>

                <div>
                    <h1>Хиты продаж</h1>
                    <CardsMain/>

                    <div className="row">

                        {
                            props.partsB.map((datas,index) => (
                                <div className="parts  col-6 mt-4" key={index}>
                                <div className="half" >
                                    <img onClick = {() => props.getPartsIdss(datas.brand, props.history)} src={datas.image} alt=""/>

                                </div>
                                </div>
                            ))
                        }


                    </div>

                    <CardsMain/>

                    <CardsMain/>

                    <Brends history={props.history}/>

                </div>

                </div>
                <Footer/>


            </div>
        );
    }

const mapStateToProps = (state) => {

    return{
        partsB:state.partM.partsB,
    }
};


export default connect(mapStateToProps,{inform,getPartsB, getPartsIdss})(Home);
