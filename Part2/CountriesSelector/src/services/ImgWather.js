import axios from "axios";

const imgWather = {
    async getImgData(icon) {
        try {
            const response = await axios.get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
            return response.data;
        } catch (error) {
            console.error("Error in getIMGData:", error);
            return null;            
        }
    }
}

export default imgWather;