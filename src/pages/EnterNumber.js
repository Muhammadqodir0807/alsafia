import React, { useState, useEffect } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { enternumber } from "../redux/action/loginAction";
import Navbar from "../Components/Nav";
import axios from "axios";
import Footer from "../Components/Footer";
import "./register.scss";
import { Redirect, useHistory } from "react-router-dom";
import {toast} from "react-toastify";

const EnterNumber = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        phone: "",
        number: "",
        password: "",
    });

    const [sms, setSms] = useState(false);
    const [smsVerify, setSmsVerify] = useState(false);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const user = await axios.post(
                "https://doniyor0277.pythonanywhere.com/register/",
                { phone: form.phone, password: form.password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (user.statusText === "OK") {
                localStorage.setItem("token", user.data.token);
                axios.defaults.headers.common["Authorization"] = user.data.token;
                history.push("/");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const postPhone = async (e) => {
        e.preventDefault();
        try {
            const num = await axios.post(
                "https://doniyor0277.pythonanywhere.com/sendphonenumberpassword/",
                { phone: form.phone },
                { headers: { "Content-Type": "application/json" } }
            );
            if (num.data.message === "Password yuborildi.") {
                setSms(true);
            } else {
                setSms(false);
            }
            console.log({phone: form.phone});
        } catch (e) {
            console.log(e);
        }
        setSms(true);
    };

    const verifyPhone = async (e) => {
        e.preventDefault();
        try {
            const verify = await axios.post(
                "https://doniyor0277.pythonanywhere.com/customerphonecheck/",
                { phone: form.phone, smscode: form.number },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(verify);
            setSms(false);
            setSmsVerify(true);
            if(verify.statusText === 'OK') {
                toast('Подтверждено')
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <form className="form-data p-2">
                                    <div className="form-field flex">
                                        <input
                                            onChange={(e) => onChange(e)}
                                            type="phone"
                                            id="phone"
                                            name="phone"
                                            placeholder="Телефон номер"
                                            className={`form-field-input input ${
                                                smsVerify ? "" : "w-75"
                                            }`}
                                            value={form.phone}
                                            disabled={smsVerify}
                                        />
                                        <button
                                            htmlFor="email"
                                            className={`btn btn-danger ms-1 ${
                                                smsVerify ? "d-none" : ""
                                            }`}
                                            onClick={(e) => postPhone(e)}
                                            style={{ width: "25%" }}
                                        >
                                            {sms ? "Ещё раз" : "Отправить"}
                                        </button>
                                    </div>

                                    <div className={`form-field flex ${sms ? "" : "d-none"}`}>
                                        <input
                                            onChange={(e) => onChange(e)}
                                            type="text"
                                            id="number"
                                            name="number"
                                            placeholder="СМС номер"
                                            className="form-field-input input w-75"
                                            value={form.number}
                                        />
                                        <button
                                            onClick={(e) => verifyPhone(e)}
                                            htmlFor="email"
                                            className="btn btn-danger ms-1"
                                        >
                                            Подтвердить
                                        </button>
                                    </div>

                                    <div className={`form-field ${smsVerify ? "" : "d-none"}`}>
                                        <label htmlFor="email" className="form-field-name">
                                            Пароль
                                        </label>
                                        <input
                                            onChange={(e) => onChange(e)}
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-field-input input"
                                            value={form.password}
                                        />
                                    </div>

                                    <div className={`form-field ${smsVerify ? "" : "d-none"}`}>
                                        <button
                                            type="submit"
                                            onClick={(e) => onSubmitForm(e)}
                                            className="btn bg-success"
                                        >
                                            Отправить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default connect(null, { enternumber })(EnterNumber);