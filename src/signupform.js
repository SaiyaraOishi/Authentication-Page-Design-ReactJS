import React from "react";
import "./signinform.css";
import { Link } from "react-router-dom";


function SignUpForm(){

    return(
        <div className="style">
            <br/>
            <br/>
            <br/>
            <div className="text"><h1>Register</h1></div>
            <div>
                <form action="" className="form">
                    <div>
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" placeholder="Enter a name" name="name" id="name"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" placeholder="Enter an email" name="email" id="email"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input type="text" placeholder="Enter a password" name="passwprd" id="password"/>
                    </div>
                    <br/> 
                    <div>
                        <label htmlFor="confirm_password">Confirm Password</label><br/>
                        <input type="text" placeholder="Re-enter password" name="confirm_password" id="confirm_password"/>
                    </div>
                    <br/>
                    <button type="submit">Sign Up</button><br/>    
                    <div>Already have an account?<Link to={'/login'}>Sign In</Link></div>

                </form>
            </div>
        </div>
    );
}

export default SignUpForm;