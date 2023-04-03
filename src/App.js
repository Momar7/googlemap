import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css'

class MapContainer extends Component {
  render(){
    return(
      <Map
      google = {this.props.google}
      style = {{width:"100%", height: "100%"}}
      zoom = {10}
      //here we gonna define a default localisation buy giving a latitude and a longitude
      initialCenter = {
        {
          lat:14.6971200,
          lng:-17.4570324
        }
      }
      />
    );
    }
  }
  // here we use a APIKey from google cloud 
  export default GoogleApiWrapper({
  apiKey: "AIzaSyBGwqptoT94RwKOxaf3LPe4CeJyM3e62j0"
  })(MapContainer)
