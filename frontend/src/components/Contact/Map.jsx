import React, {Component} from 'react'
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
//import './map.css'
//import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';

/*
const MyMap = withScriptjs(withGoogleMap((props) => 
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyDHtX2qq3VhTh-rINGk0WVJuqXZL9iG0sY' }}
        defaultCenter={{ lat: 47.47130, lng: 19.03030 }}
        defaultZoom={17}
      >
          {props.isMarkerShown && <Marker position={{ lat: 47.47130, lng: 19.03030 }} />}
        </GoogleMap>
        ))
      </div>
    </div>
))




export default MyMap
*/

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDHtX2qq3VhTh-rINGk0WVJuqXZL9iG0sY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;