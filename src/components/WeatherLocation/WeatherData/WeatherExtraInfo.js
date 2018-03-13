import React from 'react';


const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
			<p>{`humidity: ${humidity}%h`}</p>
			<p>{`wind: ${wind}`}</p>
	</div>
	)



export default WeatherExtraInfo;