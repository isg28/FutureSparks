import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/header.css";
import globeIcon from "../../assets/dashboard/globe.png";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="dashboard-header">
            <div className="dashboard-header-container">
                <h1 onClick={() => navigate("/dashboard")} className="clickable">Learn</h1>
                <h1 onClick={() => navigate("/activity")} className="clickable">Activities</h1>
                <h1 onClick={() => navigate("/gameDashboard")} className="clickable">Play</h1>
            </div>
            <div className="dropdown">
                <img src={globeIcon} alt="Globe Icon" className="dropdown-icon" />
                <div className="dropdown-content">
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
