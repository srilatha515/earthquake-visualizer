const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/earthquakes', async (req, res) => {
  try {
    const response = await axios.get(
      'https://earthquake.usgs.gov/fdsnws/event/1/query',
      {
        params: {
          format: 'geojson',
          starttime: '2024-01-01',
          endtime: '2025-12-31',
          minmagnitude: 5.0,
          limit: 500,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching earthquake data:', err.message);
    res.status(500).json({ error: 'Failed to fetch earthquake data' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
