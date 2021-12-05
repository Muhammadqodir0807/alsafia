import React, { useState, useEffect } from "react";
import Navbar from "../Nav";
import Footer from "../Footer";
import { API_PATH } from "../../tools/constans";
import axios from "axios";
import {toast} from "react-toastify";

const Korzina = () => {
    let [bool, setBool] = useState(true);
    let [orders, setOrders] = useState(null);
    let [currentNum, setCurrentNum] = useState("");

    const [form, setForm] = useState({
        name: "",
        surname: "",
        phone: "",
        address: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            ...form,
            data: JSON.parse(localStorage.getItem("basket")),
        };

        try {
            const res = await axios.post(
                "http://abboskakhkhorov.pythonanywhere.com/api/OrderJson/",
                { data },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(res);
            toast("Ваши закупки отправлены")
        } catch (err) {
            console.log(err);
        }

        // console.log(data);
    };

    const inc = (e, order, q) => {
        let quantity = q;
        setCurrentNum(quantity);

        const filtered = orders.map((item) => {
            if (item.uniqueid === order.uniqueid) {
                return { ...item, buy_quantity: 1 * quantity + 1 };
            } else {
                return item;
            }
        });

        localStorage.setItem("basket", JSON.stringify(filtered));
    };
    const dec = (e, order, q) => {
        let quantity = q;
        setCurrentNum(quantity);
        const filtered = orders.map((item) => {
            if (item.uniqueid === order.uniqueid) {
                return {
                    ...item,
                    buy_quantity: 1 * quantity - 1,
                };
            } else {
                return item;
            }
        });

        localStorage.setItem("basket", JSON.stringify(filtered));
    };
    useEffect(() => {
        const parsedOrders = JSON.parse(localStorage.getItem("basket"));
        setOrders(parsedOrders);
    }, [bool, currentNum]);

    const onDelete = (e, id) => {
        const filtered = orders.filter((order) => order.uniqueid !== id);
        localStorage.setItem("basket", JSON.stringify(filtered));
        setBool(!bool);
    };

    const summ = (chosenOrders) => {
        const summ =
            chosenOrders &&
            chosenOrders.map(
                (order) => 1 * order.currentPrice * 1 * order.buy_quantity
            );

        let finalSumm = 0;

        for (let i = 0; i < summ.length; i++) {
            finalSumm = finalSumm + summ[i];
        }
        return finalSumm;
    };

    const summDel = (chosenOrders) => {
        const summ =
            chosenOrders &&
            chosenOrders.map(
                (order) => 1 * order.currentOldprice * 1 * order.buy_quantity
            );

        let finalSumm = 0;

        for (let i = 0; i < summ.length; i++) {
            finalSumm = finalSumm + summ[i];
        }

        return finalSumm;
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="main-cart">
                <div className="left-side">
                    <div className="basket">
                        <h1 className="title">
                            Корзина{" "}
                            <sup className="sup-basket">{orders ? orders.length : 0}</sup>
                        </h1>
                        <label htmlFor="o-c" className="handler">
                            <i className="fas fa-list"></i>
                        </label>
                        <input type="checkbox" id="o-c" className="o-c" />
                        <div className="orders-list">
                            {orders &&
                            orders.map((order) => (
                                <div className="orders-list-item">
                                    <div className="d-flex w-50">
                                        <div className="order-image">
                                            <img src={API_PATH + order.colors[0].image[0].image} />
                                        </div>
                                        <div className="order-content">
                                            <span>{order.productname}</span>
                                            <span>Цветь: {order.currentColor.color}</span>
                                            <span>
                          Размер: {order.size && order.size.ordersize}
                        </span>
                                            <span>Бренд: {order.brand}</span>
                                        </div>
                                    </div>
                                    <div className="order-inc-dec">
                                        <button
                                            disabled={1 * order.buy_quantity === 1 ? true : false}
                                            className="dec"
                                            onClick={(e) => dec(e, order, order.buy_quantity)}
                                        >
                                            -
                                        </button>
                                        <span className="num">{1 * order.buy_quantity}</span>
                                        <button
                                            className="inc"
                                            onClick={(e) => inc(e, order, order.buy_quantity)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="order-price">
                                        <h3>
                                            {1 * order.buy_quantity * 1 * order.currentColor.price} сум
                                        </h3>
                                        <del>
                                            {1 * order.buy_quantity * 1 * order.currentColor.oldprice} сум
                                        </del>
                                    </div>
                                    <div className="order-delete">
                                        <i
                                            className="fas fa-trash delete-button"
                                            onClick={(e) => onDelete(e, order.uniqueid)}
                                        ></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="send">
                        <h1 className="title">Способ доставки</h1>
                        <p className="send-way">Выбрать адрес доставки</p>
                    </div>
                    <div className="forms">
                        <div className="forms_way">
                            <h1 className="title">Способ оплаты</h1>
                            <p className="address">
                                Для выбора способа оплаты, необходимо выбрать адрес доставки
                            </p>
                        </div>
                        <div className="forms_form">
                            <h1 className="title">Ваши данные</h1>
                            <form className="form-data">
                                <div className="n-sr">
                                    <div className="form-field w">
                                        <label htmlFor="name" className="form-field-name">
                                            Имя
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            onChange={(e) => onChange(e)}
                                            value={form.name}
                                            className="form-field-input input"
                                        />
                                    </div>
                                    <div className="form-field w">
                                        <label htmlFor="surname" className="form-field-name">
                                            Фамилия
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="surname"
                                            onChange={(e) => onChange(e)}
                                            value={form.surname}
                                            className="form-field-input input"
                                        />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone" className="form-field-name">
                                        Контактный телефон
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        onChange={(e) => onChange(e)}
                                        value={form.phone}
                                        className="form-field-input input"
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="email" className="form-field-name">
                                        Адресс
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        onChange={(e) => onChange(e)}
                                        value={form.address}
                                        name="address"
                                        className="form-field-input input"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="form-order">
                        <div className="total">
                            <h1 className="title">Итого</h1>
                            <p className="money">{orders ? summ(orders) : 0} сум</p>
                        </div>
                        <div className="order-send">
                            <p>Товары, {orders && orders.length} шт.</p>
                            <del>{orders ? summDel(orders) : 0} сум </del>
                        </div>
                        <div className="order-address">
              <span className="order-address-title">
                Доставка:{" "}
                  <a className="link" href="#">
                  Выбрать адрес доставки
                </a>
              </span>
                        </div>

                        <button onClick={(e) => onSubmit(e)} className="button">
                            ЗАКАЗАТЬ
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Korzina;