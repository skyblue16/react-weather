import React, { Component } from  'react';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastextenCont extends Component {
    render(){
        return(
            this.props.city && <ForecastExtended  city={this.props.city}/> 
        )
    }
    
}

const mapStateToProps = ({city}) => (
    console.log(`este es el valor de mapStateProps ${city}`),{city}
);
export default connect(mapStateToProps, null )(ForecastextenCont);
