import React from "react";
import ReactDOM from "react-dom";
var axios = require("axios");


export default class Map extends React.Component {
  constructor() {
    super();    
    this.state = {
      input:""
    };
  }
  
  handleChange(event){
    this.setState({input:event.target.value});
  }
  handleClick (){
    console.log('handled click');
    //axios do the thing jquery
    var queryURL = "/search?query=" + this.state.input;
    //code to put pins on the map
    return axios.get(queryURL).then((response) => {
        console.log(response);
        var latLng = new google.maps.LatLng(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng);
        this.map.panTo(latLng);
        console.log('this.map', this.map);

        // Previously: i < response.data.results -> ....results.LENGTH
        for (var i = 0; i < response.data.results.length; i++) {
          // previously: response.data.results[i].geometry.location
          // position key requires LatLng object, so 
          // we need to do: latLng = new google.maps.LatLng(/* information */)

          var latLng = new google.maps.LatLng(
            response.data.results[i].geometry.location.lat, 
            response.data.results[i].geometry.location.lng);

          var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            title: 'Hello World!'
          });

          marker.setMap(this.map);
        }
      })

    // Some code for setting zoom level
  }

  componentDidUpdate() {
  	///this is hwere you cna pan toa nother place ont he map
  	// var latLng = new google.maps.LatLng(this.props.lat, this.props.lon);
   //  this.map.panTo(latLng);
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
      // center: {
      // 	lat: lat,
      // 	lng: lon
      // },
      zoom: 16
    });
  }

  
  render() {
  	console.log('4');
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
   	
    return (
      <div>
      <div className="row">
  <div className="col-lg-6">
    <div className="input-group">
      <div className="input-group-btn">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.handleClick.bind(this)}>Search<span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#" id="search">Search</a></li>
          <li><a href="#" id="maps">Map</a></li>
          <li><a href="#">Logs</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>
      <input type="text" className="form-control" aria-label="..." id="input" value={this.state.input} onChange={this.handleChange.bind(this)} required/>
    </div>
  </div>
</div>
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
