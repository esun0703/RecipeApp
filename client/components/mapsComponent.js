import React from "react";
import ReactDOM from "react-dom";


export default class Maps extends React.Component {
  
  constructor(){
      super();
      this.state={
        lat: 48.858608,
        lon:2.294471
      }
  }
  
  updateLocation() { 
      //todo
      this.setState({
        lat: 43.6426,
        lon: -79.3871
      })
  }
  
  componentDidUpdate() {
  	///this is hwere you cna pan toa nother place ont he map
  	var latLng = new google.maps.LatLng(this.props.lat, this.props.lon);
    this.map.panTo(latLng);
  }
  componentDidMount() {
  	console.log('1');
  	window.initMap = this.initMap.bind(this);
  	loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyBtd0Rm6EoowNo16BoCBpQwxqgv40Z5P0U&libraries=places&callback=initMap")
  }
  
  initMap() {
  	console.log('2');
  	console.log('this', this);
  	console.log('2', typeof this.props.lat, typeof this.props.lon);
  	const lat = this.props.lat;
  	const lon = this.props.lon;
  	console.log(lat, lon);
  	this.map = new google.maps.Map(document.getElementById('mymap'), {
      center: {
      	lat: lat,
      	lng: lon
      },
      zoom: 16
    });
  }

  
  render() {
  	console.log('4');
    const mapStyle = {
      width: '100%',
      height: 500,
      border: '1px solid black'
    };
   	
    return (
      <div id="mapDisplay">
        <h1>DONATE</h1>
        <div id="donateIntroRow" className="row">
          <div className="col-md-6">
            <img id="mapIntroImg" src="../public/style/main-p3.jpg"/>
          </div>
          <div id="donateDescription" className="col-md-6">
            <h3>How To Donate</h3>
            <p>Search below for your local food pantry. We hope this way we can build a community that focuses on lessening food waste and also helping those in need. </p>
            <br/>
            <p>Every year, tons of food goes to waste when it can be donated to those in need. This food waste also contributes to many enviornmental issues due to the amount of methane gas produced. We hope by promoting donations this will not only help you keep a clean fridge, but also a clean community, and ultimately..a clean planet. </p>
          </div>
        </div>
        <div id="mapSearchRow" className="row">
          <input id="mapSearch"></input>
          <button id="mapBtn" onClick={this.handleClick}>Submit</button>
        </div>
        <h1>Nearby Food Pantries</h1>
        <div ref="map" id="mymap" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

function loadJS(src) {
   console.log('5');
   var ref = window.document.getElementsByTagName("script")[0];
   var script = window.document.createElement("script");
   script.src = src;
   script.async = true;
   ref.parentNode.insertBefore(script, ref);
}

