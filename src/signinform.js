import React from "react";
import { Link } from "react-router-dom";
import "./signinform.css";

function SignInForm(){

    return(
        <div className="style">
            <br/>
            <br/>
            <br/>
            <div className="text"><h1>Login</h1></div>
            <div>
                <form action="" className="form">
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" placeholder="Enter your email" name="email" id="email"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input type="text" placeholder="Enter your password" name="passwprd" id="password"/>
                    </div>
                    <br/> 
                    <button type="submit">Sign In</button><br/>    
                    <div>Haven't signed up yet?!<Link to={'/'}>Sign Up</Link></div>

                </form>
            </div>
        </div>
    );
}

export default SignInForm;