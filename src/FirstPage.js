import React from "react";
import { useNavigate } from "react-router-dom";
import './loginForRest/loginRegister.scss';

function FirstPage(){
  const navigate=useNavigate();
  const loginNavigate=()=>{
    navigate('/login');
  }
  const loginUserNavigate=()=>{
    navigate('/loginUser');
  }
    return(
        <>
        <nav>
          <label class="logo">tiFFin</label> 
        </nav>
        <img src="tiffin-service-man-vector-34406987.jpg" alt="Not found"/>
        <div id="btn-container" className="d-grid gap-2 d-md-block">
          <button id="btnClient" className="btn btn-outline-secondary" type="button" onClick={loginNavigate}>Register Restaurant</button>
          <button id="btnRest" className="btn btn-outline-secondary" type="button" onClick={loginUserNavigate}>As Customer</button>
        </div>
        </>
    )
}
export default FirstPage;