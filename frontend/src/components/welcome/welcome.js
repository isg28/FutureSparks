import React, { useState } from "react";
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
import colorfulBackground from "../../assets/account/colorfulBackground.png";
import clickSound1 from "../../assets/click_sfx.m4a";  // Assuming your first click sound is here
import clickSound2 from "../../assets/click2_sfx.m4a";  // Assuming your second click sound is here

function Home() {
    const navigate = useNavigate();
    const [clickSoundIndex, setClickSoundIndex] = useState(0); // State to alternate between sounds

    // Function to play the alternating click sounds
    const playClickSound = () => {
        const audio = new Audio(clickSoundIndex === 0 ? clickSound1 : clickSound2);
        audio.play();
        setClickSoundIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Alternate the sound
    };

    // Function to handle start button click (navigates to /login)
    const handleStartClick = () => {
        playClickSound(); // Play the click sound
        navigate("/login"); // Navigate to the login page
    };

    return (
        <div className="home-container">
            <div className="main-container">
                <div className="welcome-background">
                    <img src={colorfulBackground} alt="background" className="welcome-background" />
                </div>
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
                    <img src={start_handwritten} alt="Start Handwritten" className="start-text" onClick={handleStartClick} />
                </div>
            </div>
        </div>
    );
}

export default Home;
