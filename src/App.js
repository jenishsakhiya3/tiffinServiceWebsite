import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import React, { useEffect,useState} from "react";
import { useNavigate} from "react-router-dom";
import FirstPage from "./FirstPage";
import Login from "./loginForRest/Login";
import Register from "./loginForRest/Register";
import LoginUser from "./loginForUser/LoginUser";
import RegisterUser from "./loginForUser/RegisterUser";

function App() {
  const navigate=useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/firstpage');
    },2000);
    return () => clearTimeout(timeoutId);
  }, navigate);
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route exact path="/firstpage" element={<FirstPage/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/loginUser" element={<LoginUser/>}/>
            <Route exact path="/registerUser" element={<RegisterUser/>}/>
          </Routes>
      </header>
    </div>
  );
}
export default App;
