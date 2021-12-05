
import React, {Component, useEffect} from 'react';
import ModalExample from "./Data";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setBurger,getBurger,getBurgerId} from "../redux/action/burgerAction";
import {inform,getCardBack} from "../redux/action/mainPartsAction";

import {API_PATH} from "../tools/constans";
import Back from "./Back";


const Cards3 = (props) => {

    useEffect(() => {
        props.getBurger();
        props.getBurgerId();
    },[])

    return (

        <div
            className="row cards mt-5">

            {props.imageId && props.imageId.map((data, index) => (
                <div className="text-decoration-none twocards col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-5 ">
                    <div  className='kategoriya'>

                        <div>
                            <div className="prosmotr">
                                <ModalExample id={data.id}/>
                            </div>
                            <Link to={"/three"}  onClick={() => props.getCardBack(data.id , props.history) } className="out">

                                <div className="foot">
                                    <div className="example"></div>
                                    <div className="inside">
                                        <div className='korzina'>В корзину</div>
                                        <div className="name"></div>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className="imgback">
                                    <img className='w-100' src={API_PATH + data.colors[0].image[0].image} alt=""/>
                                    <span className='pink'>{data.colors[0].discount} % </span>
                                </div>
                                <div>
                                    <h4 className='size'>{data.colors[0].price} sum
                                        <span className='old'>{data.colors[0].oldprice} sum</span>
                                        {/*<span className='pink'>{item.small}</span>*/}
                                    </h4>
                                    <div className="pword">
                                        <p className='pwordp'>{data.brand}/ {data.productname}</p>
                                        {/*    <div className="star">*/}
                                        {/*        <div className="abs">{item.star}</div>*/}
                                        {/*        {item.abs}*/}
                                        {/*    </div>*/}
                                    </div>
                                    <div><span className='rassrochka'>РАССРОЧКА 0-0-24</span></div>
                                    {/*<div className="zed">gfd</div>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))

            }


        </div>


    );
}

const mapStateToProps = (state) => {


    return{
        images:state.brends.images,
        imageId:state.brends.imageId
    }
}


export default connect(mapStateToProps,{setBurger,getBurger,getBurgerId,inform,getCardBack})(Cards3);