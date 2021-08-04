import React from "react";
import { useHistory } from "react-router-dom";


function Home () {
    const history = useHistory();
    return (
        <>
        <div className="card d-flex flex-row justify-content-between">
            <button 
            type="button" 
            className="btn btn-secondary col-5"
            onClick={()=>{
                history.push('/login');
            }}>
            Login
            </button>   
            <button 
            type="button" 
            className="btn btn-secondary col-5"
            onClick={()=>{
                history.push('/signup');
            }}>
            Signup
            </button>  
        
        </div>
        </>
    )
}
export default Home;