# 🌎 Earthquake Visualizer (2024–2025)

A simple full-stack web application that visualizes real earthquake data from **USGS (United States Geological Survey)** for the years **2024 and 2025**.  
Built using **Node.js (Express)** for the backend and **HTML, CSS, JavaScript** for the frontend.

---

## 🚀 Features

- Fetches live earthquake data (magnitude, time, coordinates, location) from the USGS API.  
- Displays data in a clean, responsive HTML table.  
- Backend API built using Express and Axios.  
- Frontend built with basic HTML, CSS, and JS — no frameworks.  
- CORS-enabled full-stack setup (runs locally with one command).

---

## 🗂️ Folder Structure

earthquake-visualizer/
│
├── backend/
│ └── server.js # Express backend fetching data from USGS API
│
├── frontend/
│ ├── index.html # Main webpage
│ ├── style.css # Styling
│ └── script.js # Frontend logic (fetch + render data)
│
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository

git clone https://github.com/yourusername/earthquake-visualizer.git
cd earthquake-visualizer

2️⃣ Install backend dependencies
npm install express axios cors

3️⃣ Run the server
node backend/server.js

You should see:

✅ Server running on http://localhost:5000

4️⃣ Open in Browser

Go to:
👉 http://localhost:5000

Click “Load Earthquake Data” to view the 2024–2025 earthquakes.

🔍 API Used

USGS Earthquake API (GeoJSON Feed)
Documentation: https://earthquake.usgs.gov/fdsnws/event/1/

Query Example:

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2025-12-31&minmagnitude=5

🛠️ Tech Stack
|Layer	  |Technology              |
|Backend	||Node.js, Express, Axios|
|Frontend |	HTML, CSS, JavaScript  |
Data Source	USGS Earthquake API
📸 Output Preview
Earthquake Data Table
Displays list of earthquakes from 2024–2025 with location, magnitude, date, and coordinates
💡 Future Enhancements

Add Leaflet.js map to visualize earthquake locations.

Add filters (year, region, magnitude).

Add pagination and data export (CSV/JSON).
