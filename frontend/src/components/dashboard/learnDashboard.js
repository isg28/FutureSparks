import React from "react";
import Header from "./Header"; 
import "../../styles/dashboard/learnDashboard.css";

function LearnDashboard() {
    return (
        <div className="dashboard-container">
            <Header /> {/* Always Show Header */}
        </div>
    );
}

export default LearnDashboard;
