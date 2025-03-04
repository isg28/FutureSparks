import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/account/login.css";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        login: "",  
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            localStorage.setItem("token", data.access);
            alert("Login successful!");
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials. Please try again.");
        }
    };


    return (
        <div className="login-container">
            <div className="flag-banner-container">
                <div className="flag-banner"></div>
            </div>

            <div className="login-box">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username or Email</label>
                    <input type="text" name="login" placeholder="Enter email or username" onChange={handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Type here" onChange={handleChange} required />

                    <button type="submit" className="login-button">Sign In</button>

{/*                     <button type="submit" className="login-button" onClick={() => navigate("/dashboard")}> Sign In</button>
 */}                </form>
                <a href="#" className="forgot-password">Forgot password?</a>
                <button className="register-button" onClick={() => navigate("/createAccount")}>
                    Register Here
                </button>
            </div>
        </div>
    );
}

export default Login;
