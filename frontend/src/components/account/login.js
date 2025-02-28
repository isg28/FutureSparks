import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/account/login.css";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="flag-banner-container">
                <div className="flag-banner"></div>
            </div>

            <div className="login-box">
                <h2>Sign In</h2>
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="Type here" />

                    <label>Password</label>
                    <input type="password" placeholder="Type here" />

                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <a href="#" className="forgot-password">Forgot password?</a>
                <button className="register-button" onClick={() => navigate("/createAccount")}>
                    Register Here
                </button>
            </div>
        </div>
    );
}

export default Login;
