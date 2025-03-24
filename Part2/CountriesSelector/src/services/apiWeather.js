import axios from 'axios';


const apiWater = {
  async getWaterData(lat, lon, apiKey) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response.data;
    }
    catch (error) {
      console.error('Error in getWaterData:', error);
      return null;
    }
  }
}

export default apiWater;