import axios from 'axios';
const weatherApi = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/weather?q=fortaleza,br&units=metric&appid=4781a90f33c504e00416538135347b7f",
});

export default weatherApi;