import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';



const api_key = '7ef9343f1692462eecbd9335a6bf3727';
// const location = 'santiago,scl';
const url = `http://api.openweathermap.org/data/2.5/weather`
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`


class WeatherLocation extends Component{
	constructor ({city}){
		super();
		this.state = {
			city,
			data: null,
		}
		console.log('construnctor');

	}
	// importar a transformWeather.js
	// getWeatherState = (weather) =>{
	// 	return SUN;

	// }

	// getData = (weather_data) =>{
	// 	//enlazado al icono del tiempo
	// 	const weatherState = this.getWeatherState(this.weather)
	// 	const {humidity, temp } = weather_data.main;
	// 	const {speed} = weather_data.wind;

	// 	const data ={
	// 		humidity,
	// 		temperature: temp,
	// 		weatherState,
	// 		wind: `${speed} m/s`,

	// 	}
	// 	return data;
	// }
	componentWillMount() {
		// console.log('hello visaka')
		// this.setState ({
		// 	data: data1,
        // })
        const {city} = this.state
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

		fetch(api_weather).then( data =>{
			console.log(data)
			return data.json();
		}).then(weather_data =>{
			const data = transformWeather(weather_data)
			this.setState ({ data })
			
			 
		})
	console.log('actualizado');
	
	}
	// componentWillMount(){
	// 	// console.log('componetwilmunt');//aparece antes del renderizado
	// 	this.handleUpdateClick();
	// }
	// componentDidMount(){
    //    console.log('componentdidMunt');
	// }
	// componentWillUpdate(){
	// 	console.log('componetWillupdate');
	// }
	// componentDidUpdate(){
	// 	console.log('componentdidupdate');//se ejecuta y altualiza despues del 2 reenderizado
	// }
	render = () => {
		const {onWeatherLocationClick} = this.props;
		const {city, data} = this.state;
    return (
		<Paper zDepth={4}>
		<div className='weaterDataCont' onClick={onWeatherLocationClick}>
		<Location city = {city}/>
       {data ? <WeatherData data = {data} /> : <CircularProgress size={60} thickness={7} />}
	</div>
		</Paper>
     
	);
  } 

}


WeatherLocation.propTypes = {//func para validar funcion
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func,
}


// const WeatherLocation = () => (
// 	<div className='weaterDataCont'>
// 		<Location city = {'MIAMI'}/>
//        <WeatherData data ={data} />

// 	</div>
// 	)

export default WeatherLocation;