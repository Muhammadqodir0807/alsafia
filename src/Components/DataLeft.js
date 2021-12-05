import React, {useState} from "react";
import axios from "axios";
import {API_PATH} from "../tools/constans";
import {updateState} from "../redux/action/menusAction";
import {Link} from "react-router-dom";


const DataLeft = (props) => {




    const [data12, setData12] = useState([])


    axios.get(API_PATH +"api/ImagefilesByProductsColorId/ "  +`${props.id}`)
    // .then(res => console.log(res))
        .then(res => setData12 (res.data))

    const renderModal = data12.map((data2) => (
           <div className="leftimg mt-3">
               <img className="w-100" src={data2.image} alt=""/>

           </div>
       ))



    return(
        <div className="col-1">
            {
                data12.map((data2) => (
                    <div className="leftimg mt-3">
                        {/*{console.log( data1.color[0].image[0].image)}*/}
                        {/*<img className="w-100" src={API_PATH + data2.color[0].image[0].id} alt="error"/>*/}
                        <img className="w-100" src={data2.image} alt=""/>

                    </div>
                ))
            }


        </div>
    )

}
    export default DataLeft;