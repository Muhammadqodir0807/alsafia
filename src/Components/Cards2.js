
import React, {Component, useEffect} from 'react';
import ModalExample from "./Data";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {slides,getCarousel,getCarouselId} from "../redux/action/carouselAction";
import {inform,getCardBack} from "../redux/action/mainPartsAction";
import {API_PATH} from "../tools/constans";


const Cards2 = (props) => {


    useEffect(() => {
        props.getCarousel();
        props.getCarouselId();
    },[])

    return (

        <div
            className="row cards mt-5">

            {/*{console.log(props)}*/}
            {/*{console.log("props.partscard")}*/}

            {/*{*/}
            {/*    props.slideId.data.map((data) => {*/}
            {/*        console.log(data)*/}
            {/*        console.log("dataslide")*/}
            {/*    })*/}
            {/*}*/}

            {props.slideId.data && props.slideId.data.map((data, index) => {
                if (props.slideId.data.length > 0)
                    return (
                        <div className="text-decoration-none twocards col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-5 ">
                            <div className='kategoriya'>

                                <div>
                                    <div className="prosmotr">
                                        <ModalExample id={data.id}/>
                                    </div>
                                    <Link to={"/three"}  onClick={() => props.getCardBack(data.id , props.history) }  className="out">


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
                                            <span className='pink'>{data.discounts} % </span>
                                        </div>
                                        <div>
                                            {/*<h4 className='size'>{data.price} sum*/}
                                            {/*    <span className='old'>{data.oldprice} sum</span>*/}
                                            {/*    /!*<span className='pink'>{item.small}</span>*!/*/}
                                            {/*</h4>*/}
                                            <div className="pword">
                                                {/*<p className='pwordp'>{data.brand}/ {data.productname}</p>*/}
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
                    )


            })

            }



        </div>


    );
}

const mapStateToProps = (state) => {


    return{
        slideId:state.carousel.slideId,
        slide:state.carousel.slide,
    }
}


export default connect(mapStateToProps,{slides,getCarousel,getCarouselId,inform,getCardBack})(Cards2);
