import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/account/createAccount.css";
import colorfulBackground from "../../assets/account/colorfulBackground.png";
import acknowledgementSign from "../../assets/account/acknowledge_sign.PNG";
import batsuIcon from "../../assets/account/batsu.png";

function CreateAccount() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showBanner, setShowBanner] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Show the acknowledgment banner immediately when clicking "Create Account"
        setShowBanner(true);

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
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    const handleCloseBanner = () => {
        setShowBanner(false);
        navigate("/login");
    };

    return (
        <div className="register-container">
            <div className="background-container2">
                <img src={colorfulBackground} alt="background" className="background-container" />
            </div>
            {showBanner ? (
                <div className="banner-container">
                    <img src={acknowledgementSign} alt="Acknowledgement Sign" className="banner-image" />
                    <div className="banner-heading">
                        <p>Disclaimer:</p>
                     </div>
                    <div className="banner-text">
                        <p>Welcome to Future Sparks, a website designed to enhance your learning about the Sustainable Development Goals (SDGs). Please note that this website provides access to an AI powered chatbot and is intended for educational purposes only. It may not always provide perfectly accurate or up-to-date information. We recommend adult supervision when children are using the chatbot to ensure a safe educational experience. Your interactions with the chatbot may be stored and analyzed to improve our services, but they are not shared with third parties. By using this chatbot, you acknowledge and agree to these terms. If you have feedback or questions, please contact us.</p>
                    </div> 
                    <button className="close-button" onClick={handleCloseBanner}>
                        <img src={batsuIcon} alt="Close" className="batsu-icon" />
                    </button>
                </div>
            ) : (
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

                        <button type="submit" className="register-button">Create Account</button>
                    </form>
                    <button className="back-button" onClick={() => navigate("/login")}>
                        Back to Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default CreateAccount;
