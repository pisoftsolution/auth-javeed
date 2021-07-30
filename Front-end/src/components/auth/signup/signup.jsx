import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../../redux/actions/auth";
import { emailOtp , phoneOtp } from "../../../redux/actions/verify";

function Signup() {
    const initialState={ email:"", password:"" , phone:"" , fullName:"" };
    const [ formData , setFormData ] = useState(initialState);
    
    const dispatch = useDispatch();
    const history= useHistory();

    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(signup(formData,history))
       .then(res=>{
           localStorage.setItem("email",formData.email);
           localStorage.setItem("phone", formData.phone);
           dispatch(emailOtp());
       })
    }
    return (
        <>
            <div className="card">
                <h4>
                    Welcome to my first signup
                </h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input                           
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input-group"
                            value={formData.email}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                        />
                    </div>
                    <div>
                        <input                           
                            name="phone"
                            type="phone"
                            className="input-group"
                            placeholder="Enter your phone number (with country code)"
                            value={formData.phone}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                            
                        />
                    </div>
                    <div>
                        <input                           
                            name="fullName"
                            placeholder="Enter your full name"
                            type="text"
                            className="input-group"
                            value={formData.fullName}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                            
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            className="input-group"
                            value={formData.password}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                });
                            }}
                        />
                    </div>
                    <div>
                        <button
                        className="btn-sub"
                       type="submit"
                        >
                     Signup
                        </button>
                    </div>
                </form> 
            </div>
        </>
    )
}
export default Signup;