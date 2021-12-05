
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../tools/constans";

const ModalExample = (props) => {
    const { buttonLabel = "Быстрый просмотр", className } = props;

    useEffect(() => {
        axios
            .get(API_PATH + "/api/ProductInfo/" + `${props.id}`)
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data);
            })
            .catch((err) => console.log("Aka aylaning"));
    }, []);

    const [data, setData] = useState([]);
    const [currentColor, setCurrentColor] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState(data);
    const [size, setSize] = useState();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const [modalin, setModalin] = useState(false);
    const togglein = () => setModalin(!modalin);


    const onChange = (e, color) => {
        setColor(e.target.value);
        setCurrentColor(color);
    };

    const onMouseEnter = (e, imgage) => {
        setImg(imgage);
    };

    const addSize = (e, ordersize, id) => {
        setSize({ ...size, id, ordersize });
    };

    const addBasket = (e, data1) => {
        e.preventDefault();

        //data
        if (localStorage.getItem("basket")) {
            let obj = JSON.parse(localStorage.getItem("basket"));
            data1.size = size;
            data1.currentColor = currentColor.colorname;
            obj.push(data1);
            localStorage.setItem("basket", JSON.stringify(obj));
        } else {
            data1.size = size;
            data1.currentColor = currentColor.colorname;
            localStorage.setItem("basket", JSON.stringify([data1]));
        }

        //size
        // if (localStorage.getItem("size")) {
        //   let size = JSON.parse(localStorage.getItem("size"));
        //   size.push(size);
        //   localStorage.setItem("size", JSON.stringify(size));
        // } else {
        //   localStorage.setItem("size", JSON.stringify([size]));
        // }
    };

    return (
        <div>
            <Button color="white" onClick={toggle}>
                {buttonLabel}
                {props.id}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                    {data.map((data1) => (
                        <div className="artikul">
                            <div>
                                <div className="btn-close" onClick={toggle}></div>
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
                      <h1>{data1.price} сумм</h1>&nbsp;
                        <del>{data1.oldprice} сумм</del>
                    </span>
                                        <h5>Цвет: {color}</h5>
                                        <div className="colors">
                                            {data1.colors.map((color, index) => (
                                                <div className="colors-field">
                                                    <label htmlFor={index} className="label">
                                                        <img
                                                            src={API_PATH + color.image[1].image}
                                                            className="color-image"
                                                        />
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

                                        <div className="sizes">
                                            {(currentColor.size
                                                    ? currentColor.size
                                                    : data1.colors[0].size
                                            ).map((item) => (
                                                <div
                                                    className="sizes-size"
                                                    onClick={(e) => addSize(e, item.size, data1.id)}
                                                >
                                                    <span className="size-title">{item.size}</span>
                                                    <span className="size-sub">{item.quantity}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="buttons">
                                            <button
                                                className="to-basket"
                                                onClick={(e) => addBasket(e, data1)}
                                            >
                                                Добавить в корзину
                                            </button>
                                            <button className="fast-order">Быстрый заказ</button>
                                            <Button  onClick={toggle}>
                                               <h1>button</h1>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}

                    <Link
                        to={"/three"}
                        className="text-decoration-none bord d-flex justify-content-center mt-4"
                    >
                        <button className="btn btn-danger">
                            Больше информации о товаре
                        </button>
                    </Link>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ModalExample;