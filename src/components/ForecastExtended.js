import React, {Component} from 'react';
import PropType from 'prop-types';
import ForecastItems from './forcastItems';
import transformForecast from  './../services/transformForecast';
import './../App.css';


// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'DOmingo'
// ]
// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// }
const api_key = '7ef9343f1692462eecbd9335a6bf3727';
const url = `http://api.openweathermap.org/data/2.5/forecast`

class ForecastExtended extends Component {
//sirve para los ciclos de vida
    constructor(){
        super();
        this.state = {
            forecastData: null,
        }

    }

    componentDidMount(){//estoy llamando a la propiedad city
       this.updateCity(this.props.city);
    
    }
    // componentWillReciveProps: recibe una propiedad y ejecuta la proxima 
    //decirle que la proxima propiedad cambie , cada ves que haga click cambia los estados
    //si doy click a bogota , que se cuenta que es distinto al proximo click, si lo tenog cuanod doy lick es distinto cambia el estado
    //comparo, y luego borro el state y pongo al que le doy click
    
    componentWillReceiveProps(nextProps) {
       if (nextProps.city !== this.props.city) {
           this.setState({forecast: null});
           this.updateCity(nextProps.city);
           
       }
    }
     updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(url_forecast).then(data => (data.json())
    ).then(weather_data => {
        console.log(weather_data );
        const forecastData = transformForecast(weather_data);
        this.setState({forecastData});
        
    })
     }


    renderForecatsItemsDays(forecastData){
        return forecastData.map(forecast => (
            <ForecastItems className="de"
            key={`${forecast.weekDay}${forecast.hour}`}

            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
            />
        ))
        // return ( mis datos estaticos
        //     days.map(day => (<ForecastItems className="result" key={day} weekDay={day} hour={10} data={data} />))
        // )
        //ahora datos dinamicos de la api
        
    }
    renderProgress() {
        return(<h1>Cargando pronostico extendido</h1>)
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state; //es igual al estado de arriba pero cambiara con set state
        return(
            <div>
               <h1>
               Bienvenido: {city}
               </h1>
               {forecastData ? 
               this.renderForecatsItemsDays(forecastData) :
               this.renderProgress() }
             </div>
        );
    }
}

ForecastExtended.propType = {
    city: PropType.string.isRequired,
   
}

export default ForecastExtended;

// para cmabiar estado setstate
// estado diname state
