import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/welcome/welcome.css";
import welcomeImage from "../../assets/welcome/welcome_image.png";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <img src={welcomeImage} alt="Shadow" className="image-shadow" />
            <div className="main-container">
                <div className="image-container">
                    <img src={welcomeImage} alt="Welcome" className="rotating-image" />
                </div>

                <div className="main-item" id="welcomeTitle">
                    Welcome to []
                </div>

                <div className="main-item start-text" onClick={() => navigate("/login")}>
                    Start
                </div>
            </div>
        </div>
    );
}

export default Home;
