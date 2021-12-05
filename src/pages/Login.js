import React, { useState } from "react";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { login } from "../redux/action/loginAction";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        phone: "",
        password: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await axios.post(
                "https://doniyor0277.pythonanywhere.com/login/",
                form,
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

        console.log(form);
    };

    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm
                                onSubmit={(event, errors, values) => {
                                    props.login(event, errors, values, props.history);
                                }}
                            >
                                <AvField
                                    onChange={(e) => onChange(e)}
                                    value={form.phone}
                                    type="text"
                                    name="phone"
                                    label="Your phone number"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <AvField
                                    onChange={(e) => onChange(e)}
                                    value={form.password}
                                    type="password"
                                    name="password"
                                    label="Your password"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <button
                                    onClick={(e) => onSubmit(e)}
                                    type="submit"
                                    className="btn btn-success btn-block w-100 mt-3"
                                >
                                    Sign in
                                </button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { login })(Login);