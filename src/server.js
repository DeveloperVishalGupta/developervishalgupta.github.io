const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS to allow frontend requests

const GOOGLE_API_KEY = 'YOUR_API_KEY'; // Replace with your Google API key
const PLACE_ID = 'PLACE_ID'; // Replace with your Place ID

app.get('/api/reviews', async (req, res) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json`,
            {
                params: {
                    place_id: PLACE_ID,
                    fields: 'name,rating,reviews',
                    key: GOOGLE_API_KEY,
                },
            }
        );
        res.json(response.data.result.reviews);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching reviews');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
