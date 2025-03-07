import React from "react";
import Header from "./Header";
import "../../styles/dashboard/activity.css";
import nightjarImage from "../../assets/dashboard/nightjar.png";
import fennecfoxImage from "../../assets/dashboard/fennecfox.png";
import oceanCleanupImage from "../../assets/dashboard/oceanCleanup.jpg";
import cyclistImage from "../../assets/dashboard/cyclist.jpg";
import recycleImage from "../../assets/dashboard/recycle.png";
import solarpanelImage from "../../assets/dashboard/solarpanels.jpg";
import urbanParksImage from "../../assets/dashboard/urbanParks.jpg";
import farmImage from "../../assets/dashboard/farm.jpg";
import twoGif from "../../assets/dashboard/2.gif";
import sevenGif from "../../assets/dashboard/7.gif";
import elevenGif from "../../assets/dashboard/11.gif";
import twelveGif from "../../assets/dashboard/12.gif";
import thirteenGif from "../../assets/dashboard/13.gif";
import fourteenGif from "../../assets/dashboard/14.gif";

function Activity() {
    const activities = [
        {
            sdg: 11,
            title: "Urban Green Spaces",
            description: "SDG 11: Making cities inclusive, safe, resilient, and sustainable through urban planning and green space development.",
            image: urbanParksImage
        },
        {
            sdg: 2,
            title: "Farm to Table",
            description: "SDG 2: Ending hunger by promoting sustainable agriculture and supporting local food systems.",
            image: farmImage
        },
        {
            sdg: 13,
            title: "Carbon Footprint Challenge",
            description: "SDG 13: Taking urgent action to combat climate change through education and sustainable practices.",
            image: cyclistImage
        },
        {
            sdg: 12,
            title: "Recycle Relay",
            description: "SDG 12: Ensuring sustainable consumption patterns by reducing waste and promoting recycling.",
            image: recycleImage
        },
        {
            sdg: 14,
            title: "Ocean Cleanup Crew",
            description: "SDG 14: Conserving oceans and marine resources by reducing pollution and protecting ecosystems.",
            image: oceanCleanupImage
        },
        {
            sdg: 7,
            title: "Solar Power Puzzle",
            description: "SDG 7: Ensuring access to affordable, reliable, and clean energy through renewable solutions.",
            image: solarpanelImage
        }
    ];

    // Map SDG numbers to their corresponding GIFs
    const sdgGifs = {
        2: twoGif,
        7: sevenGif,
        11: elevenGif,
        12: twelveGif,
        13: thirteenGif,
        14: fourteenGif
    };

    return (
        <div className="activity-container">
            <Header />
            
            <div className="activity-grid">
                {activities.map((activity, index) => (
                    <div key={index} className="activity-card">
                        <div className={`activity-image ${index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? 'expanded' : ''}`}>
                            <img 
                                src={activity.image}
                                alt={activity.title}
                                className={index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? "" : "small-image"}
                            />
                        </div>
                        <p className="activity-title">{activity.title}</p>
                        <div className="activity-description-container">
                            <img 
                                src={sdgGifs[activity.sdg] || ""} // Use the SDG-specific GIF, fallback to empty string
                                alt={`Mini ${activity.title}`}
                                className="mini-description-image"
                            />
                            <p className="activity-description">{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;