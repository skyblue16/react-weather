import React, { Component } from  'react';
import {connect} from 'react-redux';//conecta componentes de redux a react
import {setCity} from './../actions'
import LocationList from './../components/LocationList';

class LocationListCont extends Component {
    handlerSelectionLocationClick = city => {
        
          console.log(`handleWeatherLocationClick ${city}`)
          this.props.setCity(city);
      
            //  store.dispatch(setCity(city));
      
    }
    render(){
        return(
        <LocationList  cities={this.props.cities} 
        onSelectedLocation= {this.handlerSelectionLocationClick}/>
        )
    }
    
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});


export default connect(mapDispatchToPropsActions,null )(LocationListCont)