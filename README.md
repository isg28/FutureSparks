# FutureSparks
This project was conceived at the Hackathon hosted at Sacramento State.

Its an interactive, kid friendly web app that teaches the **United Nations Sustainable Development Goals (SDGs)** through short descriptions and AI augmented mini-games.


<p align="center">
  <img src="frontend/src/assets/readme/welcomescreen.png" alt="FutureSparks Welcome Screen" width="600">
</p>

> ⚠️ **Safety & Educational Use Only**  
> The chatbot and games are for learning. Content may not always be perfectly accurate or up-to-date. 

<br>

</br>

## Features
- **Play Dashboard** with mini-games descriptions mapped to SDGs.

<p align="center">
  <img src="frontend/src/assets/readme/playImage.png" alt="FutureSparks Play Screen" width="600">
</p>

- **Learn/Activity Dashboard** with bite-size, image rich articles and descriptions.

<p align="center">
  <img src="frontend/src/assets/readme/activityImage.png" alt="FutureSparks Activity Screen" width="600">
</p>

- **Leaderboard** per mode (Easy/Hard/AI) backed by the Django API.
- **Global Header** with quick navigation (Learn ▸ Activities ▸ Play).
- **Sound & Animation Effects** for engagement.

### SDG Alignment (examples)
- **Fix the Leak!** → **SDG 6** (Clean Water & Sanitation)  
Future implementations: 
- **Wave Wanderer** (Turtle & trash) → **SDG 14** (Life Below Water)  
- **Trash Sort Challenge** → **SDG 12** (Responsible Consumption & Production)  
- **Community Heroes** → **SDG 1** (No Poverty)  
- **Power Down** → **SDG 7** (Affordable & Clean Energy)  
- **City Builder** → **SDG 11** (Sustainable Cities & Communities)  


<br>


</br>

## Tech Stack
<!-- Frontend -->
Frontend: ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white)
![react-icons](https://img.shields.io/badge/react--icons-111827?logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)

<!-- Backend -->
Backend: ![Django](https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/Django%20REST-cc2031?logo=django&logoColor=white)
![django-cors-headers](https://img.shields.io/badge/django--cors--headers-0b7285)
![python-dotenv](https://img.shields.io/badge/python--dotenv-3776AB?logo=python&logoColor=white)

<!-- Media -->
Media: ![Images](https://img.shields.io/badge/Images-PNG%2FJPG-4b5563)
![Audio](https://img.shields.io/badge/Audio-WAV%2FMP3-4b5563)

<br>

</br>

## Local Development
- ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white) Node.js ≥ 18 and npm  
- ![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white) Python ≥ 3.10  

<br>


</br>

1.) Backend
```
cd backend
py -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install Django djangorestframework django-cors-headers python-dotenv
python manage.py migrate
python manage.py runserver   :: http://localhost:8000
```


2.) Frontend
```
cd frontend
npm install
npm start     # http://localhost:3000
```

<br>

</br>

## Game Description 
### Quick Test of Game 1
- Fix the Leak! (Functional): Click leaking fixtures to stop water loss before time runs out. Modes: *Easy*, *Hard*, *Vs AI*.


<p align="center">
  <img src="frontend/src/assets/readme/gameOneImage.png" alt="FutureSparks Game One Screen" width="600">
</p>

1. Start backend & frontend.
2. Visit /gameDashboard and open Fix the Leak!.
3. Pick Easy, Hard, or Vs AI.
4. Click only flickering/leaking fixtures to gain points; wrong clicks deduct points.
5. When time hits 0, the score auto-submits to the leaderboard.


<br>

</br>

## Acknowledgements

- United Nations Sustainable Development Goals framework.
- Open-source libraries and icon sets used in the app.