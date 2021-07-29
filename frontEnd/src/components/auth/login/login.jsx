import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../redux/actions/auth";


function Login() {
    const initialState = { email:"", password:""};
    const [ formData , setFormData ] = useState(initialState);
    
    const dispatch = useDispatch();
    const history= useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData,history))
       
    }
    return (
        <>
            <div className="card">
                <h4>
                   Please Login to continue
                </h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                           value={formData.email}
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                            className="input-group"
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                            placeholder="Enter your password"
                            type="password"
                            className="input-group"
                        />
                    </div>
                    <div>
                        <button
                        className="btn-sub"
                       type="submit"
                        >
                     Login
                        </button>
                    </div>
                </form> 
            </div>
        </>
    )
}
export default Login;