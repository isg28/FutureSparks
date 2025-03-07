import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/dashboard/Header.js";
import LeadershipBoard from "./leadershipBoard"; 
import "../../styles/games/gameOne.css";

// Import your image assets
import faucetNormalImage from "../../assets/game/gameOne/faucet-normal.png";
import faucetLeakingImage from "../../assets/game/gameOne/faucet-leak.png";
import drainNormalImage from "../../assets/game/gameOne/drain-normal.png";
import drainLeakImage from "../../assets/game/gameOne/drain-leak.png";
import shower2NormalImage from "../../assets/game/gameOne/shower2-normal.png";
import shower2LeakImage from "../../assets/game/gameOne/shower2-leak.png";
import showerNormalImage from "../../assets/game/gameOne/shower-normal.png";
import showerLeakImage from "../../assets/game/gameOne/shower-leak.png";
import sinkNormalImage from "../../assets/game/gameOne/sink-normal.png";
import sinkLeakImage from "../../assets/game/gameOne/sink-leak.png";
import puddle from "../../assets/game/gameOne/puddle.png";
import curtain from "../../assets/game/gameOne/curtain.png"; 
import curtainRight from "../../assets/game/gameOne/curtain-right.png";
import curtainTop from "../../assets/game/gameOne/curtain_top.png"; 
import curtainUnderneathTop from "../../assets/game/gameOne/curtain-underneathtop.png"; 
import woodBackground from "../../assets/game/gameOne/woodbackground.png";

// Start Screen Component
const StartScreen = ({ onStartEasy, onStartHard, onStartAI, onLeadership }) => {
    return (
        <div className="game-over-container">
            <h1>Start Game!</h1>
            <div className="game-over-buttons">
                <button onClick={onStartEasy}>Easy</button>
                <button onClick={onStartHard}>Hard</button>
                <button onClick={onStartAI}>Vs AI</button>
                <button onClick={onLeadership}>Leadership</button>
            </div>
        </div>
    );
};

const GameOver = ({ score, aiScore, difficulty, onPlayAgain, onLeadership }) => {
    return (
        <div className="game-over-container">
            <h1>Game Over!</h1>
            <p>Your Score: {score}</p>
            {difficulty === "ai" && <p>AI Score: {aiScore}</p>}
            <div className="game-over-buttons">
                <button onClick={onPlayAgain}>Play Again</button>
                <button onClick={onLeadership}>Leadership</button>
            </div>
        </div>
    );
};

function GameOne() {
    const navigate = useNavigate();

    const [images, setImages] = useState([
        { id: 1, isLeaking: false, srcNormal: sinkNormalImage, srcLeaking: sinkLeakImage, position: { top: "15%", left: "20%" } },
        { id: 2, isLeaking: false, srcNormal: drainNormalImage, srcLeaking: drainLeakImage, position: { top: "15%", left: "70%" } },
        { id: 3, isLeaking: false, srcNormal: faucetNormalImage, srcLeaking: faucetLeakingImage, position: { top: "50%", left: "45%" } },
        { id: 4, isLeaking: false, srcNormal: showerNormalImage, srcLeaking: showerLeakImage, position: { top: "55%", left: "80%" } },
        { id: 5, isLeaking: false, srcNormal: shower2NormalImage, srcLeaking: shower2LeakImage, position: { top: "55%", left: "10%" } },
    ]);

    // State for game management
    const [timeLeft, setTimeLeft] = useState(20); // Always start at 20 seconds
    const [score, setScore] = useState(0);
    const [flickerState, setFlickerState] = useState(true); 
    const [gameOver, setGameOver] = useState(false); 
    const [gameStarted, setGameStarted] = useState(false); 
    const [difficulty, setDifficulty] = useState("easy"); 
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [aiCursorPosition, setAiCursorPosition] = useState({ top: "50%", left: "50%" }); 
    const [aiScore, setAiScore] = useState(0); 

    // Refs to manage intervals and prevent duplicates
    const timerRef = useRef(null);
    const flickerRef = useRef(null);
    const leakRef = useRef(null);
    const aiRef = useRef(null);

    // Handle image click with scoring logic
    const handleImageClick = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id && image.isLeaking
                    ? { ...image, isLeaking: false }
                    : image
            )
        );
        setScore((prevScore) => {
            const image = images.find((img) => img.id === id);
            return image?.isLeaking ? prevScore + 1 : prevScore - 1; 
        });
    };

    const aiClick = () => {
        console.log("AI is checking for leaks...");
        const leakingImages = images.filter((img) => img.isLeaking);
        console.log("Leaking images found:", leakingImages.length);
        if (leakingImages.length > 0) {
            const randomImage = leakingImages[Math.floor(Math.random() * leakingImages.length)];
            console.log("AI chose image:", randomImage.id, "at position:", randomImage.position);

            setImages((prevImages) =>
                prevImages.map((image) =>
                    image.id === randomImage.id && image.isLeaking ? { ...image, isLeaking: false } : image
                )
            );
            setAiScore((prevScore) => {
                console.log("AI score updated from", prevScore, "to", prevScore + 1);
                return prevScore + 1;
            });
            setAiCursorPosition(randomImage.position);
            console.log("AI cursor moved to:", randomImage.position);
        } else {
            console.log("No leaking images for AI to fix.");
        }
    };

    const saveScore = async () => {
        const username = localStorage.getItem("username") || "Anonymous"; 
        const data = { username, score, mode: difficulty };

        try {
            await fetch("http://localhost:8000/gameone/submit-score/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            console.log("Score saved successfully:", data);
        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    // ✅ Automatically Save Score When Game Ends
    useEffect(() => {
        if (gameOver) {
            saveScore();
        }
    }, [gameOver]);


    useEffect(() => {
        if (gameStarted && !timerRef.current) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    console.log("Timer (before update):", prevTime); // Debug before update
                    if (prevTime <= 0) {
                        clearInterval(timerRef.current);
                        timerRef.current = null;
                        setGameOver(true); // Trigger game over
                        return 0;
                    }
                    const newTime = prevTime - 1;
                    return newTime;
                });
            }, 2000); // Slower decrement every 2 seconds
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [gameStarted]);

    // Flicker effect for leaking images with debugging (slower for Easy)
    useEffect(() => {
        if (gameStarted && !flickerRef.current) {
            flickerRef.current = setInterval(() => {
                setFlickerState((prev) => !prev);
            }, difficulty === "easy" ? 600 : 300);
        }
        return () => {
            if (flickerRef.current) clearInterval(flickerRef.current);
        };
    }, [gameStarted, difficulty])

    // Randomly set multiple images to leak with debugging
    useEffect(() => {
        if (gameStarted && !leakRef.current) {
            leakRef.current = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(leakRef.current);
                    leakRef.current = null;
                    return;
                }

                // Randomly decide how many images to leak based on difficulty
                const maxLeaks = Math.min(difficulty === "hard" ? 4 : 3, images.length);
                const numLeaks = Math.floor(Math.random() * maxLeaks) + 1;

                // Get indices of non-leaking images
                const nonLeakingIndices = images
                    .map((image, index) => (!image.isLeaking ? index : -1))
                    .filter((index) => index !== -1);

                if (nonLeakingIndices.length > 0) {
                    // Shuffle indices to randomize selection
                    for (let i = nonLeakingIndices.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [nonLeakingIndices[i], nonLeakingIndices[j]] = [nonLeakingIndices[j], nonLeakingIndices[i]];
                    }
                    const selectedIndices = nonLeakingIndices.slice(0, Math.min(numLeaks, nonLeakingIndices.length));

                    // Set selected images to leaking
                    setImages((prevImages) =>
                        prevImages.map((image, index) =>
                            selectedIndices.includes(index)
                                ? { ...image, isLeaking: true }
                                : image
                        )
                    );
                }
            }, difficulty === "hard" ? 1500 : 2000); // Faster leaks for Hard
        }
        return () => {
            if (leakRef.current) {
                clearInterval(leakRef.current);
                leakRef.current = null;
            }
        };
    }, [gameStarted, difficulty]);

    useEffect(() => {
        if (gameStarted && difficulty === "ai" && !gameOver && !aiRef.current) {
            console.log("AI mode started, setting up interval...");
            aiRef.current = setInterval(() => {
                if (gameOver) {
                    console.log("Game over detected, stopping AI interval...");
                    clearInterval(aiRef.current);
                    aiRef.current = null;
                    return;
                }
                aiClick();
            }, 1500); // AI clicks every 1.5 seconds
        }
        return () => {
            if (aiRef.current) {
                console.log("Cleaning up AI interval...");
                clearInterval(aiRef.current);
                aiRef.current = null;
            }
        };
    }, [gameStarted, difficulty, images, gameOver]);

    // Reset game and return to the Start Screen
    const resetGame = () => {
        // Reset game states
        setGameStarted(false); 
        setGameOver(false);
        setTimeLeft(20);
        setScore(0);
        setAiScore(0);
        setImages(images.map((image) => ({ ...image, isLeaking: false })));
        setAiCursorPosition({ top: "50%", left: "50%" });
        [timerRef, flickerRef, leakRef, aiRef].forEach((ref) => {
            if (ref.current) clearInterval(ref.current);
            ref.current = null;
        });

        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (flickerRef.current) {
            clearInterval(flickerRef.current);
            flickerRef.current = null;
        }
        if (leakRef.current) {
            clearInterval(leakRef.current);
            leakRef.current = null;
        }
    };

    const goToLeadership = () => {
        setShowLeaderboard(true);
    };

    const startGameEasy = () => {
        setDifficulty("easy");
        setTimeLeft(20);
        setGameStarted(true);
    };

    const startGameHard = () => {
        setDifficulty("hard");
        setTimeLeft(20);
        setGameStarted(true);
    };

    const startGameAI = () => {
        setDifficulty("ai");
        setTimeLeft(20);
        setGameStarted(true);
    };

    return (
        <div className="game-one-container">
            <Header />
            {!gameStarted && !showLeaderboard ? (
                <StartScreen
                    onStartEasy={startGameEasy}
                    onStartHard={startGameHard}
                    onStartAI={startGameAI}
                    onLeadership={goToLeadership}
                />
            ) : showLeaderboard ? (
                <LeadershipBoard onBack={() => setShowLeaderboard(false)} />
            ) : !gameOver ? (
                <div className="game-box">
                    {/* Game Header: Timer and Score */}
                    <div className="game-header">
                        <p className="timer-display" style={{ fontSize: "24px", transform: "none !important", zoom: 1 }}>
                            Time: {timeLeft}
                        </p>
                        <div className="score">Score: {score} {difficulty === "ai" && `| AI Score: ${aiScore}`}</div>
                    </div>

                    <div className="game-area">
                        <div className="curtain-top-container">
                            {Array.from({ length: 25 }, (_, index) => (
                                <img
                                    key={index}
                                    src={curtainTop}
                                    alt={`Curtain Top ${index + 1}`}
                                    className="curtain-top"
                                />
                            ))}
                        </div>                   
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 1" className="curtain-underneathtop" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 2" className="curtain-underneathtop curtain-underneathtop-2" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 3" className="curtain-underneathtop curtain-underneathtop-3" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 4" className="curtain-underneathtop curtain-underneathtop-4" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 5" className="curtain-underneathtop curtain-underneathtop-5" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 6" className="curtain-underneathtop curtain-underneathtop-6" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 7" className="curtain-underneathtop curtain-underneathtop-7" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 8" className="curtain-underneathtop curtain-underneathtop-8" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 9" className="curtain-underneathtop curtain-underneathtop-9" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 10" className="curtain-underneathtop curtain-underneathtop-10" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 11" className="curtain-underneathtop curtain-underneathtop-11" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 12" className="curtain-underneathtop curtain-underneathtop-12" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 13" className="curtain-underneathtop curtain-underneathtop-13" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 14" className="curtain-underneathtop curtain-underneathtop-14" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 15" className="curtain-underneathtop curtain-underneathtop-15" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 16" className="curtain-underneathtop curtain-underneathtop-16" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 17" className="curtain-underneathtop curtain-underneathtop-17" />
                        <img src={curtainUnderneathTop} alt="Curtain Underneath Top 18" className="curtain-underneathtop curtain-underneathtop-18" />
                        <img src={curtain} alt="Curtain Left" className="curtain-left" />
                        <img src={curtainRight} alt="Curtain Right" className="curtain-right" />
                        <img src={woodBackground} alt="Wood Stage" className="wood-stage" />

                        {/* AI Cursor */}
                        {difficulty === "ai" && (
                            <div
                                className="ai-cursor"
                                style={{
                                    position: "absolute",
                                    top: aiCursorPosition.top,
                                    left: aiCursorPosition.left,
                                    transition: "all 0.5s ease",
                                    zIndex: 10,
                                }}
                            />
                        )}

                        {images.map((image) => (
                            <div
                                key={image.id}
                                className={`game-image ${image.isLeaking ? "leaking" : ""}`}
                                style={{
                                    position: "absolute",
                                    top: image.position.top,
                                    left: image.position.left,
                                }}
                                onClick={() => handleImageClick(image.id)}
                            >
                                {/* Main image (flickers between normal and leaking when isLeaking is true) */}
                                <img
                                    src={
                                        image.isLeaking
                                            ? (console.log("Image src for id", image.id, ":", flickerState ? image.srcLeaking : image.srcNormal), flickerState ? image.srcLeaking : image.srcNormal)
                                            : image.srcNormal
                                    }
                                    alt={image.isLeaking ? "Leaking" : "Normal"}
                                />
                                {/* Puddle image (appears below when leaking) */}
                                {image.isLeaking && (
                                    <img
                                        src={puddle}
                                        alt="Puddle"
                                        className="puddle-image"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <GameOver
                    score={score}
                    aiScore={aiScore}
                    difficulty={difficulty}
                    onPlayAgain={resetGame}
                    onLeadership={goToLeadership}
                />
            )}
            {/* Game Info Section (always visible, directly below game-box, no background box) */}
            <div className="game-info">
                <h2>Fix the Leak!</h2>
                <h3>Game Instructions:</h3>
                <p>
                    Click on the leaking objects (sinks, faucets, showers, etc.) to fix them before time runs out! Each fixed leak earns you 1 point, but clicking on a non-leaking object deducts 1 point. The game ends when the timer reaches zero.
                </p>
                <h3>Game Tips:</h3>
                <p>
                    - Watch for flickering objects—they indicate a leak.<br />
                    - Focus on fixing leaks quickly to maximize your score.<br />
                    - Avoid clicking on non-leaking objects to prevent losing points.<br />
                    - On Hard mode, leaks appear more frequently, so stay alert!
                </p>
                <h3>Why This Game Is Important & Relation to UN Sustainable Development Goals:</h3>
                <p>
                    "Fix the Leak!" raises awareness about water conservation, a critical global issue. By fixing leaks, you learn how small actions can prevent water waste. This game aligns with <strong>UN SDG 6: Clean Water and Sanitation</strong>, which aims to ensure sustainable water management and access to clean water for all. Leaks contribute to water loss, and addressing them helps conserve this vital resource, supporting sustainable practices worldwide.
                </p>
            </div>
        </div>
    );
}

export default GameOne;