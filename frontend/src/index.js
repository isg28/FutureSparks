import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/global/global.css';

import Welcome from './components/welcome/welcome';
import Login from './components/account/login';
import Register from './components/account/createAccount';
import LearnDashboard from './components/dashboard/learnDashboard';
import Activity from './components/dashboard/activity';
import GameDashboard from './components/dashboard/gameDashboard';
import GameOne from './components/games/gameOne';
import GameTwo from './components/games/gameTwo';

// Import the two click sound effects
import clickSound1 from './assets/click_sfx.m4a'; 
import clickSound2 from './assets/click2_sfx.m4a'; 

// Global Click Sound Effect
function App() {
    const [isFirstClick, setIsFirstClick] = useState(true);

    useEffect(() => {
        const playClickSound = () => {
            // Alternate between the two click sounds
            const soundChoice = isFirstClick ? clickSound1 : clickSound2;
            
            const audio = new Audio(soundChoice);
            audio.currentTime = 0;
            audio.play().catch((error) => console.error("Audio play error:", error));

            // Toggle the state to alternate the sound for the next click
            setIsFirstClick(!isFirstClick);
        };

        const handleGlobalClick = (event) => {
            if (event.target.tagName === "BUTTON" || event.target.tagName === "A") {
                playClickSound();
            }
        };

        document.addEventListener("click", handleGlobalClick);

        return () => {
            document.removeEventListener("click", handleGlobalClick);
        };
    }, [isFirstClick]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAccount" element={<Register />} />
                <Route path="/dashboard" element={<LearnDashboard />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/gameDashboard" element={<GameDashboard />} />
                <Route path="/gameOne" element={<GameOne/>}/>
                <Route path="/gameTwo" element={<GameTwo/>}/>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
