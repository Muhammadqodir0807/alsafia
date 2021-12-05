import React, {Component, useEffect, useState} from 'react';
import Nav from "./Nav";
import MainModal from "./MainModal";
import Footer from "./Footer";
import ModalExample from "./Data";
import {connect} from "react-redux";
import {setState,getCard,getCardBack} from "../redux/action/cardsAction";
import axios from "axios";
import {API_PATH} from "../tools/constans";
import {Button, Modal, ModalBody} from "reactstrap";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const Back = (props) => {

    useEffect(() => {
        props.getCardBack();
    },[])

    // useEffect(() => {
    //     axios
    //         .get(API_PATH + "/api/ProductInfo/" + `${props.props}`)
    //         .then((res) => {
    //             setData(res.data.data);
    //             // console.log(res.data);
    //         })
    //         .catch((err) => console.log("Aka aylaning"));
    // }, []);


    const [data, setData] = useState([]);
    const [currentColor, setCurrentColor] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState(data);
    const [size, setSize] = useState();
    const [changing, setChanging] = useState(false);

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setChanging(false);
    };

    const onChange = (e, color) => {
        setColor(color.color);
        setCurrentColor(color);
    };

    const onMouseEnter = (e, imgage) => {
        setImg(imgage);
    };


    const addSize = (e, ordersize, id) => {
        e.preventDefault()
        setSize({ ...size, id, ordersize });
    };

    const addBasket = (e, data1) => {
        e.preventDefault();

        //data
        if (localStorage.getItem("basket")) {
            let obj = JSON.parse(localStorage.getItem("basket"));
            data1.size = size;
            data1.uniqueid = uuidv4();
            data1.currentColor = currentColor.color;
            data1.currentPrice = currentColor.price
            data1.currentOldprice = currentColor.oldprice

            obj.push(data1);
            localStorage.setItem("basket", JSON.stringify(obj));
        } else {
            data1.size = size;
            data1.uniqueid = uuidv4();
            data1.currentColor = currentColor.color;
            data1.currentPrice = currentColor.price
            data1.currentOldprice = currentColor.oldprice
            localStorage.setItem("basket", JSON.stringify([data1]));
        }
        setChanging(!changing);
    }



    const [modalin, setModalin] = useState(false);
    const togglein = () => setModalin(!modalin);

    //fast-order-form
    const [formdata, setFormdata] = useState({
        data: {},
        name: '',
        phone: ''
    })
    const onSubmit = async e => {
        e.preventDefault()
        setFormdata({
            ...formdata,
            data: currentColor
        })
        try {
            await axios.post('/sss', formdata, {Headers:{ 'Content-Type': 'application/json' }})
        } catch (e) {
            console.log(e)
        }


    }

    const onSubmitHandler = e => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }


    return (
            <div >

                <Nav/>

                <div className="mt-5">

                    {props.back.map((data1,index) => (
                        <div className="artikul" key={index}>
                            <div>
                                {/*<div className="btn-close" onClick={toggle}></div>*/}
                                <h1 key={data1.id}>{data1.productname}</h1>
                                <div className="d-flex">
                                    <p>Артикул:</p>
                                    <p className="ms-1">35789469</p>
                                    <p className="ms-3">star</p>
                                    <p>&nbsp;1 отзыв</p>
                                    <p className="ms-3">Купили более {data1.buy_quantity} раз</p>
                                </div>
                            </div>
                            <form className="artikul-body">
                                <div className="column-1">
                                    <div className="column-1-container">
                                        {(currentColor.image
                                                ? currentColor.image
                                                : data1.colors[0].image
                                        ).map((img) => (
                                            <div
                                                className="image-box"
                                                onMouseEnter={(e) => onMouseEnter(e, img)}
                                            >
                                                <img className="box-image" src={API_PATH + img.image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="column-2">
                                    <div className="main-image">
                                        <img
                                            src={`${API_PATH}/${
                                                img.image ? img.image : data1.colors[0].image[0].image
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="column-3-header">
                    <span className="d-flex">
                      <h1>{data1.colors[0].price} сумм</h1>&nbsp;
                        <del>{data1.colors[0].oldprice} сумм</del>
                    </span>
                                        <h5>Цвет:{color ? color : data1.colors[0].color}</h5>
                                        <div className="colors">
                                            {data1.colors.map((color, index) => (
                                                <div className="colors-field">
                                                    <label htmlFor={index} className="label">
                                                        <img src={API_PATH + color.image[1].image} className="color-image"/>
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        id={index}
                                                        name="radio"
                                                        value={color.colorname}
                                                        onClick={(e) => onChange(e, color)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/*<div className="sizes">*/}
                                        {/*    {(currentColor.size*/}
                                        {/*            ? currentColor.size*/}
                                        {/*            : data1.colors[0].size*/}
                                        {/*    ).map((item) => (*/}
                                        {/*        <div*/}
                                        {/*            className="sizes-size"*/}
                                        {/*            onClick={(e) => addSize(e, item.size, data1.id)}*/}
                                        {/*        >*/}
                                        {/*            <span className="size-title">{item.size}</span>*/}
                                        {/*            <span className="size-sub">{item.quantity}</span>*/}
                                        {/*        </div>*/}
                                        {/*    ))}*/}
                                        {/*</div>*/}

                                        <div className="buttons">
                                            {changing ? (
                                                <Link
                                                    to="/korzina"
                                                    className="to-basket"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    Перейти в корзину
                                                </Link>
                                            ) : (
                                                <span
                                                    className="to-basket"
                                                    onClick={(e) => addBasket(e, data1)}
                                                >
                          Добавить в корзину
                        </span>
                                            )}

                                            <Button className="fast-order" onClick={togglein}>
                                                Быстрый заказ
                                            </Button>

                                            <Modal isOpen={modalin} toggle={togglein} className={'fast-order-back'}>
                                                <ModalBody className={'fast-order-mod'}>
                                                    <form className={'fast-order-form'} onSubmit={e => onSubmit(e)}>
                                                        <div className="field">
                                                            <label htmlFor="name">Имя клиента</label>
                                                            <input value={formdata.name} onChange={e => onSubmitHandler(e)} type="text" placeholder={'Имя...'} className={'input'} name={'name'} id={'name'}/>
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="number">Номер для обратного звонка</label>
                                                            <input value={formdata.phone} name={'phone'} onChange={e => onSubmitHandler(e)} type="number" placeholder={'Телефон номер...'} className={'input'}/>
                                                        </div>
                                                        <div className="field">
                                                            <button type={'submit'} className={'button'}>Отправить</button>
                                                        </div>
                                                    </form>
                                                </ModalBody>
                                            </Modal>


                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="w-50 back">

                                {
                                    data1.description.map((word) => (

                                            <div>
                                                <h1>{word.name}</h1>
                                                <h5>{word.description}</h5>
                                            </div>

                                    ))
                                }

                                {
                                    data1.additional.map((wordin) => (
                                        <div>
                                            <h1 className="mb-5 mt-5">{wordin.name}</h1>
                                            {
                                                wordin.items.map((sostav) => (
                                                    <div className="mt-3 mb-3">
                                                        <th><span className="text-dark me-4">{sostav.paramscell}     -----------------------------------</span></th>
                                                        <td>{sostav.paramscelldecor}</td>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }

                            </div>

                        </div>


                    ))}

                    {/*<Link*/}
                    {/*    to={"/three"}*/}
                    {/*    className="text-decoration-none bord d-flex justify-content-center mt-4"*/}
                    {/*>*/}
                    {/*    <button className="btn btn-danger">*/}
                    {/*        Больше информации о товаре*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                </div>


                {/*<div className='w-50 back'>*/}
                {/*    <h1>Описание</h1>*/}
                {/*    <h6 className='mt-4'>Силиконовый чехол Apple- отличное дополнение к вашему iPhone 12 Pro Max. Он плотно прилегает к*/}
                {/*        кнопкам громкости и режима сна, точно повторяет контуры телефона. Мягкая подкладка из</h6>*/}
                {/*    <h6 className='text-danger mb-5 mt-3'>Развернуть описание</h6>*/}

                {/*    <tr>*/}
                {/*        <th><span>Совместимость ----------------------------------</span></th>*/}
                {/*        <td> Apple iPhone 12 Pro Max; iPhone iPhone 12 Pro Max; Apple iPhone 12 PRO MAX*/}
                {/*            6.7; Iphone 12 Pro Max (6.7)*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th>Тип чехлов ---------------------------------------------</th>*/}
                {/*        <td>защитный кейс</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th>Вес товара с упаковкой (г) ----------------------------------</th>*/}
                {/*        <td>50 г</td>*/}
                {/*    </tr>*/}

                {/*    <tr>*/}
                {/*        <th>Высота предмета ----------------------------------</th>*/}
                {/*        <td>16.5 см</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th>Ширина предмета ----------------------------------</th>*/}
                {/*        <td>8.19 см</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th>Ширина упаковки ----------------------------------</th>*/}
                {/*        <td>8.7 см</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th>Высота упаковки ----------------------------------</th>*/}
                {/*        <td> 17.5 см</td>*/}
                {/*    </tr>*/}

                {/*    <h5 className='text-danger mt-4 mb-4'>Развернуть характеристики</h5>*/}
                {/*    <p className='inf'>Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде*/}
                {/*        товара носит справочный характер и основывается на последних доступных сведениях от продавца</p>*/}


                {/*</div>*/}
                <Footer/>
            </div>
        );

};

const mapStateToProps = (state) => {
    return{
        back:state.cardsR.back,
    }
};




export default connect(mapStateToProps,{setState,getCardBack})(Back);