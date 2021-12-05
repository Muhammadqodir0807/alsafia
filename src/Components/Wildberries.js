import React, {Component} from 'react';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import MainModal from "./MainModal";
import ModalExample from "./Data";
import Axios from 'axios'
import Back from "./Back";
import Cards from "./Cards";



class Wildberries extends Component {


    render() {


        return (
            <div>

                <Nav/>
                <Main/>

             <Footer/>

            </div>
        );
    }
}

export default Wildberries;


