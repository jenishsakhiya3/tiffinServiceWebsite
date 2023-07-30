import React from 'react';
import { Link } from 'react-router-dom';

function Register() {

    function addData() {
        document.getElementById("items").value += ",";
    }

    return (
        <>
            <nav>
                <label class="logo">tiFFin</label>
            </nav>
            <h3>Register As Restaurant</h3>
            <form method="POST" action='/restReg'>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Restaurant Name</label>
                    <input type="text" name="restname" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Restaurant Address</label>
                    <input type="text" name="restaddress" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Username</label>
                    <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">ZIP Code :</label>
                    <input type="number" name="zipcode" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Contact no.</label>
                    <input type="number" name="contact" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Select Type of Food should be deliverd :</label><br></br>
                    <input className="form-check-input" type="checkbox" value="gujarati" name="types" />Gujarati <br></br>
                    <input className="form-check-input" type="checkbox" value="punjabi" name="types" />Punjabi <br></br>
                    <input className="form-check-input" type="checkbox" value="rajasthani" name="types" />Rajasthani <br></br>
                    <input className="form-check-input" type="checkbox" value="south-indian" name="types" />South-Indian
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Add Item provide by Restaurant :</label>
                    <input type="text" id="items" name="items" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <button type="button" onClick={addData} className="btn btn-secondary btn-block mb-4">Add +</button>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Add Restaurant menu Or Restaurant Image:</label>
                    <input type="file" name="image" className="form-control" />
                </div>
                <button type="submit" className="btn btn-secondary btn-block mb-4">Sign in</button>
            </form>
        </>
    )
}
export default Register;