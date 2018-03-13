import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
	// // <div>
	// //  <h1>Santiago</h1>
	// // </div>
	// // const city = props.city;  forma larga 
	// // console.log(props)
	// // console.log(city)

	// const {city} = props;
	// debugger; //para ver lo que pasa con props
	// return (
		<div className="locationCont">
			<h1>{city}</h1>
		</div>

		)	

	// }

Location.propTypes = {
	city:PropTypes.string.isRequired,
}

export default Location;