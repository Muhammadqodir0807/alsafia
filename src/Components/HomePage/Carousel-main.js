
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {connect} from "react-redux";
import {slides,getCarousel,getCarouselId} from "../../redux/action/carouselAction";
// import {inform,getCarousel,getCarouselId} from "../../redux/action/mainPartsAction";

const CarouselMain = (props) => {

    useEffect(() => {
        props.getCarousel();
        props.getCarouselId();
    },[])

    // const [data, setData] = useState([])
    //
    // axios.get(API_PATH + "api/ShoppingDayForHomePageCarousel/")
    //     .then(res => setData(res.data))

   const renderSlides = props.slide.map( (data, index) => (
        <div key={index}>
            <img src={data.image} onClick={() => props.getCarouselId(data.id, props.history)} alt=""/>
        </div>
    ))

    return (



        <div className="carousel-main ">
            <Slider
                dots={false}
                autoplay={true}
                autoplaySpeed={3000}
            >
                {renderSlides}


            </Slider>
        </div>
    );

}

const mapStateToProps = (state) => {
    return{
        slide:state.carousel.slide,
        slideId:state.carousel.slideId

    }
}

export default connect(mapStateToProps,{slides,getCarousel,getCarouselId})(CarouselMain);


