import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/gameDashboard.css";
import nightjarImage from "../../assets/dashboard/nightjar.png";
import fennecfoxImage from "../../assets/dashboard/fennecfox.png";
import waterGameImage from "../../assets/dashboard/waterGame.png";
import turtleGameImage from "../../assets/dashboard/turtle.png";
import turtle2GameImage from "../../assets/dashboard/turtle2.png"
import sortingGameImage from "../../assets/dashboard/sorting.png";
import cityChaosImage from "../../assets/dashboard/cityChaos.png";
import foodBoxImage from "../../assets/dashboard/food_box.png"
import powerImage from "../../assets/dashboard/power.png"

function GameDashboard() {
    const navigate = useNavigate();

    // Define game data
    const games = [
        {
            title: "Fix the Leak!",
            description: "Click on the leaking objects to fix them before time runs out. This game raises awareness about water conservation and aligns with UN SDG 6.",
            image: waterGameImage,
            className: "small-image",
            onClick: () => navigate("/gameOne"),
        },
        {
            title: "Wave Wanderer",
            description: "Guide a turtle through an ocean filled with trash, avoiding obstacles and collecting clean water tokens. This game highlights the impact of pollution on marine life and aligns with UN SDG 14: Life Below Water.",
            image: turtle2GameImage,
            className: "small-image",
        },
        {
            title: "Trash Sort Challenge",
            description: "Sort items into recycle, compost, and trash bins before the timer runs out. Learn the importance of waste management and support UN SDG 12: Responsible Consumption and Production.",
            image: sortingGameImage,
        },
        {
            title: "Community Heroes",
            description: "Volunteer at shelters and food banks by distributing resources to those in need. This game promotes community support and aligns with UN SDG 1: No Poverty.",
            image: foodBoxImage,
            className: "small-image",

        },
        {
            title: "Power Down",
            description: "Turn off unnecessary lights and appliances in a virtual home to save energy. This game raises awareness about energy conservation and supports UN SDG 7: Affordable and Clean Energy.",
            image: powerImage,
            
        },
        {
            title: "City Builder",
            description: "Design a sustainable city with eco-friendly buildings, public transport, and green spaces. This game encourages sustainable urban planning and aligns with UN SDG 11: Sustainable Cities and Communities.",
            image: cityChaosImage,
        },
    ];

    return (
        <div className="gameDashboard-container">
            <Header />
            <div className="game-grid">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="game-card"
                        onClick={game.onClick || null} 
                    >
                        <div className="game-image">
                            <img
                                src={game.image}
                                alt={game.title}
                                className={game.className || ""}
                            />
                        </div>
                        <div className="game-text">
                            <p className="game-title">{game.title}</p>
                            <p className="game-description">{game.description}</p>
                        </div>
                        {/* Firework elements */}
                        <div className="firework-1"></div>
                        <div className="firework-2"></div>
                        <div className="firework-3"></div>
                        <div className="firework-4"></div>
                        <div className="firework-5"></div>
                        <div className="firework-6"></div>
                        <div className="firework-7"></div>
                        <div className="firework-8"></div>
                        <div className="firework-9"></div>
                        <div className="firework-10"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameDashboard;