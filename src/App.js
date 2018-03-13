import React, { Component } from 'react';
// import {createStore} from 'redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';//para dar sombra 
import AppBar from 'material-ui/AppBar';
import LocationListCont from './containers/LocationListCont';
import ForecastextenCont  from './containers/ForecastextenCont';

import './App.css';


const cities = [
  'Santiago,scl',
  'Buenos Aires, ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Rio de Janeiro,br',
  'Madrid,es'
]
// const store = createStore(() => {},);
//configuracion 
// const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

// const setCity = ( value => {
//   type :'setState',
//    value
// })


class App extends Component {
  
  

// handlerSelectionLocationClick = city => {
//   this.setState({city})
//     console.log(`handleWeatherLocationClick ${city}`)
//     this.props.setCity(city);

//       //  store.dispatch(setCity(city));

//   }
  render() {
    return (
        <MuiThemeProvider>
           <Grid>
              <Row>
                <Col xs={12}>
                  <AppBar title="Belens"/>
                </Col>
              </Row>
              <Row>
               <Col xs={12} md={6}>
               <LocationListCont  cities={cities} />
               </Col>
               <Col xs={12} md={6}>
                   <div>
                   <Paper zDepth={4}>
                   <div className="detail">
                    <ForecastextenCont  /> 
                   </div>
                   </Paper>
  
                   </div>
               </Col>
              </Row>
            </Grid>
        </MuiThemeProvider>
     
    );
  }
}
// const mapDispatchToPropsActions = () => {};
// const componentConnected = connect(null, mapDispatchToPropsActions)(App)
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}
export default App;

// const mapDispatchToPropsActions = dispatch => ({
//        setCity: value => dispatch(setCity(value))
// });


// export default connect(null, mapDispatchToPropsActions)(App)



 //Muithemeprovider es para el progress

