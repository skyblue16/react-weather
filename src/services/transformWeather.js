import {
    CLOUDY,
    SUN,
    CLOUD,
    RAIN, 
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE,
} from './../constant/wathers';
//no lleva import react porque no tiene componentes, 
// pero si ira dentro de uno 

//importando de weatherLocation/index.js
const getWeatherState = weather =>{
    const {id} = weather[0];
    if (id < 300) {
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    }else if(id < 600){
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id === 800){
        return SUN;
    }else
        return CLOUDY;
    

}

const transformWeather = (weather_data) =>{
    //enlazado al icono del tiempo
    const {weather} = weather_data;
    const weatherState = getWeatherState(weather)
    const {humidity, temp } = weather_data.main;
    const {speed} = weather_data.wind;

    const data ={
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,

    }
    return data;
}
export default transformWeather;