
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/dashboard/Header.js";
import "../../styles/games/gameTwo.css";

function GameTwo() {
    const navigate = useNavigate();


    return(
        <div className="game-two-container">
            <Header /> 



        </div>

    );

}
export default GameTwo;