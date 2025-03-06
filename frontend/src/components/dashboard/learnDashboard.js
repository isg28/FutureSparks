import React, { useState } from "react";
import Header from "./Header";
import "../../styles/dashboard/learnDashboard.css";

function LearnDashboard() {
    const [currentPage, setCurrentPage] = useState(0);

    const cards = [
        "Card 1", "Card 2", "Card 3", "Card 4",
        "Card 5", "Card 6", "Card 7", "Card 8",
        "Card 9", "Card 10", "Card 11", "Card 12"
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
            <Header /> {/* Always Show Header */}

            <div className="content-wrapper">
                <h2 className="section-title">FEATURED ARTICLES</h2>
                <div className="card-grid grid-2">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                </div>

                <h2 className="section-title">LATEST ARTICLES</h2>
                <div className="card-grid grid-3">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
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
                            <div key={index} className="card">{card}</div>
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
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 4</div>
                    <div className="card">Card 5</div>
                    <div className="card">Card 6</div>
                </div>
            </div>
        </div>
    );
}

export default LearnDashboard;
