import React, { useState } from "react";
import Header from "./Header";
import "../../styles/dashboard/learnDashboard.css";

function LearnDashboard() {
    const [currentPage, setCurrentPage] = useState(0);

    const cards = [
        { title: "Card 1", image: "path/to/image1.jpg", description: "Description for Card 1" },
        { title: "Card 2", image: "path/to/image2.jpg", description: "Description for Card 2" },
        { title: "Card 3", image: "path/to/image3.jpg", description: "Description for Card 3" },
        { title: "Card 4", image: "path/to/image4.jpg", description: "Description for Card 4" },
        { title: "Card 5", image: "path/to/image5.jpg", description: "Description for Card 5" },
        { title: "Card 6", image: "path/to/image6.jpg", description: "Description for Card 6" },
        { title: "Card 7", image: "path/to/image7.jpg", description: "Description for Card 7" },
        { title: "Card 8", image: "path/to/image8.jpg", description: "Description for Card 8" },
        { title: "Card 9", image: "path/to/image9.jpg", description: "Description for Card 9" },
        { title: "Card 10", image: "path/to/image10.jpg", description: "Description for Card 10" },
        { title: "Card 11", image: "path/to/image11.jpg", description: "Description for Card 11" },
        { title: "Card 12", image: "../../assets/dashboard/foodbank_learn.jpg", description: "Description for Card 12" },
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
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image1.jpg" alt="Card 1" />
                        </div>
                        <div className="card-text">Card 1 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image2.jpg" alt="Card 2" />
                        </div>
                        <div className="card-text">Card 2 Description</div>
                    </div>
                </div>

                <h2 className="section-title">LATEST ARTICLES</h2>
                <div className="card-grid grid-3">
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image3.jpg" alt="Card 3" />
                        </div>
                        <div className="card-text">Card 3 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image4.jpg" alt="Card 4" />
                        </div>
                        <div className="card-text">Card 4 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image5.jpg" alt="Card 5" />
                        </div>
                        <div className="card-text">Card 5 Description</div>
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
                            <img src="path/to/image6.jpg" alt="Card 6" />
                        </div>
                        <div className="card-text">Card 6 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image7.jpg" alt="Card 7" />
                        </div>
                        <div className="card-text">Card 7 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image8.jpg" alt="Card 8" />
                        </div>
                        <div className="card-text">Card 8 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image9.jpg" alt="Card 9" />
                        </div>
                        <div className="card-text">Card 9 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image10.jpg" alt="Card 10" />
                        </div>
                        <div className="card-text">Card 10 Description</div>
                    </div>
                    <div className="card">
                        <div className="photo-container">
                            <img src="path/to/image11.jpg" alt="Card 11" />
                        </div>
                        <div className="card-text">Card 11 Description</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LearnDashboard;
