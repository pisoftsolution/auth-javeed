import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../../redux/actions/auth";


function Signup() {
    const initialState={ email:"", password:""};
    const [ formData , setFormData ] = useState(initialState);
    
    const dispatch = useDispatch();
    const history= useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData,history))
       
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
                     Signup
                        </button>
                    </div>
                </form> 
            </div>
        </>
    )
}
export default Signup;