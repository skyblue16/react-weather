import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import Paper from 'material-ui/Paper';
import './../../App.css'
// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// }

const ForecastItems = ({weekDay, hour, data}) => (
    <div className="de">
    <Paper zDepth={4} className="paper">
    <div>{weekDay} hora - {hour} hr</div>
    <WeatherData data={data} />
    </Paper>
    </div>
)

ForecastItems.propTypes = {
    weekDay: PropTypes.string,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItems;