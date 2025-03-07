// GameDashboard.jsx
import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/gameDashboard.css";
import nightjarImage from "../../assets/dashboard/nightjar.png";
import fennecfoxImage from "../../assets/dashboard/fennecfox.png";
import waterGameImage from "../../assets/dashboard/waterGame.png";

function GameDashboard() {
    const navigate = useNavigate();

    return (
        <div className="gameDashboard-container">
            <Header />
            <div className="game-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div 
                        key={index} 
                        className="game-card" 
                        onClick={() => index === 0 && navigate("/gameOne")}
                    >
                        <div className="game-image">
                            <img 
                                src={
                                    index === 0 ? waterGameImage : 
                                    index === 5 ? fennecfoxImage : 
                                    "https://via.placeholder.com/150"
                                } 
                                alt={`Game ${index + 1}`} 
                                className={index === 0 || index === 5 ? "small-image" : ""}
                            />
                        </div>
                        <div className="game-text">
                            <p className="game-title">
                                {index === 0 ? "Fix the Leak!" : `Game ${index + 1}`}
                            </p>
                            <p className="game-description">
                                {index === 0 
                                    ? "Click on the leaking objects to fix them before time runs out. This game raises awareness about water conservation and aligns with UN SDG 6." 
                                    : "Short description..."
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameDashboard;