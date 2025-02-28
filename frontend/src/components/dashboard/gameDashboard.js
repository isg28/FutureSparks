import React from "react";
import Header from "./Header"; // Import the Header
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/gameDashboard.css";
import nightjarImage from "../../assets/dashboard/nightjar.png";
import fennecfoxImage from "../../assets/dashboard/fennecfox.png";


function GameDashboard() {
    const navigate = useNavigate();

    return (
        <div className="gameDashboard-container">
            <Header /> {/* Always Show Header */}
            <h1 className="game-page-title">Games</h1>
            <div className="game-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="game-card">
                        <div className="game-image">
                            <img 
                                src={
                                    index === 0 ? nightjarImage : 
                                    index === 5 ? fennecfoxImage : 
                                    "https://via.placeholder.com/150"
                                } 
                                alt={`Game ${index + 1}`} 
                                className={index === 0 || index === 5 ? "small-image" : ""}
                            />

                        </div>
                        <p className="game-title">Game {index + 1}</p>
                        <p className="game-description">Short description...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameDashboard;
