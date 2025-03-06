import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/account/createAccount.css";
//import groupCheer from "../../assets/account/groupCheer.png";
import colorfulBackground from "../../assets/account/colorfulBackground.png";

function CreateAccount() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/users/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (!response.ok) {
                throw new Error("Error creating account");
            }

            alert("Account created successfully! Please log in.");
            navigate("/login");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="register-container">
{/*                 <img src={groupCheer} alt="Cheering Group" className="big-background-image" />
            <img src={groupCheer} alt="Cheering Group" className="background-image left-image" />*/}
            <div className="background-container2">
                    <img src={colorfulBackground} alt="background" className="background-container" />
                </div>
            <div className="register-box">
                <h2>CREATE ACCOUNT</h2>
                
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter your username" onChange={handleChange} required />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={handleChange} required />

                    <button type="submit" className="register-button"  onClick={() => navigate("/login")}>Create Account</button>
                </form>
                <button className="back-button" onClick={() => navigate("/login")}>
                    Back to Login
                </button>
            </div>

             {/*<img src={groupCheer} alt="Cheering Group" className="background-image right-image" />*/}
             </div>
    );
}

export default CreateAccount;
