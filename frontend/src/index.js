import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './styles/global/global.css';

import Welcome from './components/welcome/welcome';
import Login from './components/account/login';
import Register from './components/account/createAccount';
import LearnDashboard from './components/dashboard/learnDashboard';
import Activity from './components/dashboard/activity';
import GameDashboard from './components/dashboard/gameDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = "/" element = {<Welcome />} />
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/createAccount" element={<Register />}/>
        <Route path="/dashboard" element={<LearnDashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/gameDashboard" element={<GameDashboard />}/>
        

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
