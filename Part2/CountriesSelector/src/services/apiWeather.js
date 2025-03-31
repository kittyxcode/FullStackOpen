import axios from 'axios';
import VITE_WEATHER_API_KEY from '../config.js';

const apiWater = {
  async getWaterData(lat, lon) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}`);
        return response.data;
    }
    catch (error) {
      console.error('Error in getWaterData:', error);
      return null;
    }
  }
}

export default apiWater;