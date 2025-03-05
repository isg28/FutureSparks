import React from "react";
import Header from "./Header"; // Import the Header
import "../../styles/dashboard/activity.css";
import nightjarImage from "../../assets/dashboard/nightjar.png";
import fennecfoxImage from "../../assets/dashboard/fennecfox.png";


function Activity() {
    return (
        <div className="activity-container">
            <Header /> {/* Always Show Header */}
            
            <div className="activity-grid">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="activity-card">
                        <div className="activity-image">
                            <img 
                                src={
                                    index === 0 ? nightjarImage : 
                                    index === 5 ? fennecfoxImage : 
                                    "https://via.placeholder.com/150"
                                } 
                                alt={`Activity ${index + 1}`} 
                                className={index === 0 || index === 5 ? "small-image" : ""}
                            />

                        </div>
                        <p className="activity-title">Activity {index + 1}</p>
                        <p className="activity-description">Short description...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;
