import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard/header.css";
import globeIcon from "../../assets/dashboard/globe.png";

// Import Font Awesome icons
import { FaUser, FaInfoCircle, FaList, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

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
                    <FaUser className="icon" />      {/* Account */}
                    <FaInfoCircle className="icon" />  {/* Info */}
                    <FaList className="icon" />      {/* List */}
                    <FaEnvelope className="icon" />  {/* Mail */}
                    <FaSignOutAlt className="icon" />  {/* Logout */}
                </div>
            </div>
        </header>
    );
}

export default Header;
