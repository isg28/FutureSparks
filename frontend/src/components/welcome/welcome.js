import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/welcome/welcome.css";
import welcomeImage from "../../assets/welcome/welcome_image.png";
import welcome_handwritten from "../../assets/welcome/welcome_handwritten.PNG"; 
import future_handwritten from "../../assets/welcome/future_handwritten.PNG";
import sparks_handwritten from "../../assets/welcome/sparks_handwritten.PNG";
import spark1 from "../../assets/welcome/spark1.PNG";
import spark2 from "../../assets/welcome/spark2.PNG";
import spark3 from "../../assets/welcome/spark3.PNG";
import start_handwritten from "../../assets/welcome/start_handwritten.PNG";


function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="main-container">
                <div className="image-container">
                    <img src={welcomeImage} alt="Welcome" className="rotating-image" />
                </div>

                <div className="main-item">
                    <img src={welcome_handwritten} alt="Welcome Handwritten" className="handwritten-image" />
                </div>

                <div className="main-item">
                    <img src={future_handwritten} alt="Future Handwritten" className="handwritten-image2" />
                </div>

                <div className="main-item">
                    <img src={sparks_handwritten} alt="Sparks Handwritten" className="handwritten-image3" />
                </div>

                <div className="main-item">
                    <img src={spark1} alt="Spark 1" className="spark-1" />
                </div>

                <div className="main-item">
                    <img src={spark2} alt="Spark 2" className="spark-2" />
                </div>

                <div className="main-item">
                    <img src={spark3} alt="Spark 3" className="spark-3" />
                </div>

                <div className="main-item">
                    <img src={start_handwritten} alt="Start Handwritten" className="start-text" />
                </div>

                <div className="main-item start-text" onClick={() => navigate("/login")}>
                </div>
            </div>
        </div>
    );
}

export default Home;
