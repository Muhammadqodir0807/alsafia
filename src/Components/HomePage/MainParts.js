import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constans";
import {connect} from "react-redux";
import {inform,getParts, getPartsId} from "../../redux/action/mainPartsAction";


const MainParts = (props) => {

    useEffect(() => {
        props.getParts();
    },[])

    const news = props.parts.map((datas,index) => (

            <div className="parts  col-sm-3  mt-4" key={index}>
                <div className="box-img" >
                    <img onClick = {() => props.getPartsId(datas.id, props.history)} src={datas.image} alt=""/>

                </div>
            </div>

    ))

        return (
            <div>
                <div className="select mt-5 mb-5">


                    <div className="row">
                        {news}



                    </div>

                </div>
            </div>
        );
}

const mapStateToProps = (state) => {

    return{
        parts:state.partM.parts,
    }
};


export default connect(mapStateToProps,{inform,getParts, getPartsId})(MainParts);

