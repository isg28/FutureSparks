import React, { useState } from "react";
import Header from "./Header";
import "../../styles/dashboard/learnDashboard.css";

// Import images
import chatIcon from "../../assets/dashboard/learnDashboard/chat.png";
import learnFoodbank from "../../assets/dashboard/learnDashboard/learn_foodbank.jpg";
import learnSlide from "../../assets/dashboard/learnDashboard/learn_slide.png";
import learnSchool from "../../assets/dashboard/learnDashboard/learn_school.jpg";
import learnResearch from "../../assets/dashboard/learnDashboard/learn_research.jpg";
import learnRecycle from "../../assets/dashboard/learnDashboard/learn_recycle.png";
import learnPark from "../../assets/dashboard/learnDashboard/learn_park.png";
import learnGarden from "../../assets/dashboard/learnDashboard/learn_garden.png";
import learnFish from "../../assets/dashboard/learnDashboard/learn_fish.png";
import learnFamily from "../../assets/dashboard/learnDashboard/learn_family.png";
import learnDolphin from "../../assets/dashboard/learnDashboard/learn_dolphin.png";
import learnBank from "../../assets/dashboard/learnDashboard/learn_bank.png";

function LearnDashboard() {
    const [currentPage, setCurrentPage] = useState(0);

    const cards = [
        { title: "Card 1", image: learnFoodbank, description: "Fighting Hunger: Kids Volunteering at Food Shelters" },
        { title: "Card 2", image: learnSlide, description: "The Joy of Play: How Happy Moments Foster Well-Being" },
        { title: "Card 3", image: learnSchool, description: "Learning Across Borders: Children’s Global Education Journey" },
        { title: "Card 4", image: learnResearch, description: "Exploring Nature: Kids Conducting Creek Research" },
        { title: "Card 5", image: learnRecycle, description: "Recycle and Play: Teaching Kids Sustainability Through Fun" },
        { title: "Card 6", image: learnPark, description: "The Playground Effect: How Play Enhances Health"},
        { title: "Card 7", image: learnGarden, description: "Growing Together: Kids Cultivating Green Spaces" },
        { title: "Card 8", image: learnFish, description: "Aquatic Adventures: Kids Engaging with Nature in the Pond" },
        { title: "Card 9", image: learnFamily, description: "The Heart of the Field: A Mother and Daughter’s Connection to Nature" },
        { title: "Card 10", image: learnDolphin, description: "Underwater Wonders: Exploring the Ocean with Dolphins" },
        { title: "Card 11", image: learnBank, description: "Healthy Waterways: How Canals and Fish Indicate Ecosystem Health" },
        { title: "Card 12", image: learnFoodbank, description: "Building a Sustainable Future: Cities with Waterways at the Core" },
    ];

    const cardsPerPage = 4;
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const currentCards = cards.slice(
        currentPage * cardsPerPage,
        (currentPage + 1) * cardsPerPage
    );

    return (
        <div className="dashboard-container">
            <Header />

            <div className="content-wrapper">
                {/* Chat icon */}
                <div className="chat-icon-container">
                    <img src={chatIcon} alt="Chat Icon" className="chat-icon" />
                </div>
                <h2 className="section-title">FEATURED ARTICLES</h2>
                <div className="card-grid grid-2">
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnFoodbank} alt="Card 1" />
                        </div>
                        <div className="card-text">Fighting Hunger: Kids Volunteering at Food Shelters (SDG 2: Zero Hunger)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnSlide} alt="Card 2" />
                        </div>
                        <div className="card-text">The Joy of Play: How Happy Moments Foster Well-Being (SDG 3: Good Health and Well-being)</div>
                    </div>
                </div>

                <h2 className="section-title">LATEST ARTICLES</h2>
                <div className="card-grid grid-3">
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnSchool} alt="Card 3" />
                        </div>
                        <div className="card-text">Learning Across Borders: Children’s Global Education Journey (SDG 4: Quality Education)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnResearch} alt="Card 4" />
                        </div>
                        <div className="card-text">Exploring Nature: Kids Conducting Creek Research (SDG 6: Clean Water and Sanitation)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnRecycle} alt="Card 5" />
                        </div>
                        <div className="card-text">Recycle and Play: Teaching Kids Sustainability Through Fun (SDG 12: Responsible Consumption and Production)</div>
                    </div>
                </div>

                <h2 className="section-title">LOCAL COMMUNITY</h2>
                <div className="carousel-container">
                    {/* Left Arrow */}
                    <button className="carousel-arrow left" onClick={handlePrev}>
                        ◄
                    </button>

                    {/* Cards Display */}
                    <div className="carousel">
                        {currentCards.map((card, index) => (
                            <div key={index} className="card">
                                <div className="photo-container">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="card-text">{card.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="carousel-arrow right" onClick={handleNext}>
                        ►
                    </button>
                </div>

                {/* Dot Navigation */}
                <div className="carousel-dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentPage === index ? "active" : ""}`}
                            onClick={() => setCurrentPage(index)}
                        ></button>
                    ))}
                </div>

                <div className="card-grid grid-3">
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnPark} alt="Card 6" />
                        </div>
                        <div className="card-text">The Playground Effect: How Play Enhances Health (SDG 3: Good Health and Well-being)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnGarden} alt="Card 7" />
                        </div>
                        <div className="card-text">Growing Together: Kids Cultivating Green Spaces (SDG 15: Life on Land)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnFish} alt="Card 8" />
                        </div>
                        <div className="card-text">Aquatic Adventures: Kids Engaging with Nature in the Pond (SDG 14: Life Below Water)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnFamily} alt="Card 9" />
                        </div>
                        <div className="card-text">The Heart of the Field: A Mother and Daughter’s Connection to Nature (SDG 2: Zero Hunger)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnDolphin} alt="Card 10" />
                        </div>
                        <div className="card-text">Underwater Wonders: Exploring the Ocean with Dolphins (SDG 14: Life Below Water)</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src={learnBank} alt="Card 11" />
                        </div>
                        <div className="card-text">Healthy Waterways: How Canals and Fish Indicate Ecosystem Health (SDG 6: Clean Water and Sanitation)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LearnDashboard;
