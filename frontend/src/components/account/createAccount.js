import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/account/createAccount.css";
import groupCheer from "../../assets/account/groupCheer.png";

function CreateAccount() {
    const navigate = useNavigate();

    return (
        <div className="register-container">
{/*                 <img src={groupCheer} alt="Cheering Group" className="big-background-image" />
 */}
            <img src={groupCheer} alt="Cheering Group" className="background-image left-image" />
            <div className="register-box">
                <h2>Create Account</h2>
                
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />

                    <button type="submit" className="register-button"  onClick={() => navigate("/login")}>Create Account</button>
                </form>
                <button className="back-button" onClick={() => navigate("/login")}>
                    Back to Login
                </button>
            </div>

             <img src={groupCheer} alt="Cheering Group" className="background-image right-image" />
             </div>
    );
}

export default CreateAccount;
