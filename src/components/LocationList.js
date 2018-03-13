import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

//pongo en llaves strtocom porque es una funcion
const LocationList = ({city, onSelectedLocation}) => {
    const handlerWeatherLocationClick = (city) => {
        console.log('handlerWeatherLocationClick', city);
        onSelectedLocation(city);
    }
    const strToComponent = cities => ( // recorro la api 
        cities.map(city => (
        <WeatherLocation key={city} city={city} className="hey"
        onWeatherLocationClick={() =>
            handlerWeatherLocationClick(city)
        }/>))
    );
    return (
    <div>
       {strToComponent(cities)}
    </div>
    );
}


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;