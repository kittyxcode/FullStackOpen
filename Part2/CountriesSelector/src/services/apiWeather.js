const apiWater = {
  async getWaterData() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
    const data = await response.json();
    return data;
  }
};

export default apiWater;