import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/actions/auth";

function Login() {
    const initialState = { email: "", password: "" };
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        dispatch(login(formData, history))
    }
    return (
        <>
            <div className="card">
                <h4> Please Login to continue </h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your e-mail"
                            className="input-group"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,

                                })
                            }}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            className="input-group"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [e.target.name]: e.target.value
                                });
                            }}
                        />
                    </div>
                    <div>
                        <button
                            className="btn-sub" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;