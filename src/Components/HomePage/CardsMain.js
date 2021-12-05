import React, {Component, useEffect, useState} from 'react';
import ModalExample from "../Data";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {connect} from "react-redux";
import {setState} from "../../redux/action/newAction";
import {getCard,getCardBack} from "../../redux/action/cardsAction";
import data from "bootstrap/js/src/dom/data";
import Back from "../Back";



const CardsMain = (props) => {

    useEffect(() => {
        props.getCard();
    }, [])



    return (
        <div>
            <div className="row cards mt-5">



                {
                    props.cards &&  props.cards.splice(1,6).map((data,index) => (

                        <div  className="incards text-decoration-none" key={index}>

                            <div className='kategoriya'>

                                <div>

                                    <div className="prosmotr">
                                        <ModalExample id={data.id}/>
                                    </div>

                                    <div className="d-none">
                                        <Back props={data.id}/>
                                    </div>

                                    <Link to={"/three"} onClick={() => props.getCardBack(data.id , props.history) } className="out text-decoration-none">

                                        <div>
                                            <div className="position-relative mb-2">

                                                <img className='w-100' src={API_PATH + data.colors[0].image[0].image} alt=""/>
                                                <span className='pink'>{data.colors[0].discount} % </span>
                                            </div>
                                            <div>

                                                <h4 className='size'>{data.colors[0].price} sum <span
                                                    className='old'>{data.colors[0].oldprice} sum</span>
                                                </h4>

                                                <div className="pword">
                                                    <p className='pwordp w-auto'>{data.brand}/ {data.product}</p>

                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        cards: state.cardsR.cards,
        getCardsId: state.cardsR.getCardsId,

    }
};

export default connect(mapStateToProps, {setState, getCard,getCardBack})(CardsMain);