import React, { useState, useEffect } from "react";

const LeadershipBoard = ({ onBack }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [selectedMode, setSelectedMode] = useState("easy"); // Default to Easy mode

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("http://localhost:8000/gameone/leaderboard/");
                const data = await response.json();
                setLeaderboard(data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };

        fetchLeaderboard();
    }, []);

    const filteredLeaderboard = leaderboard.find((entry) => entry.mode === selectedMode) || { scores: [] };

    return (
        <div className="game-over-container"> 
            <h1>Leadership Board</h1>

            <div className="leaderboard-buttons">
                <button onClick={() => setSelectedMode("easy")} className={selectedMode === "easy" ? "active" : ""}>
                    Easy
                </button>
                <button onClick={() => setSelectedMode("hard")} className={selectedMode === "hard" ? "active" : ""}>
                    Hard
                </button>
                <button onClick={() => setSelectedMode("ai")} className={selectedMode === "ai" ? "active" : ""}>
                    Vs AI
                </button>
            </div>

            {/* Centered leaderboard with 4 items on left & right */}
            <div className="leaderboard-list">
                <h2>{selectedMode.toUpperCase()} Mode</h2>
                <div className="leaderboard-grid">
                    <ol className="leaderboard-left">
                        {filteredLeaderboard.scores.slice(0, 4).map((player, i) => (
                            <li key={i}>
                                {player.username} - {player.score} PTS
                            </li>
                        ))}
                    </ol>
                    <ol className="leaderboard-right" start={5}>
                        {filteredLeaderboard.scores.slice(4, 8).map((player, i) => (
                            <li key={i + 4}>
                                {player.username} - {player.score} PTS
                            </li>
                        ))}
                    </ol>
                </div>
                {filteredLeaderboard.scores.length === 0 && <p>No scores yet</p>}
            </div>

            <button onClick={onBack}>Back</button>
        </div>
    );
};

export default LeadershipBoard;
