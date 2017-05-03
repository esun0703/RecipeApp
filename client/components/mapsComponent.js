import React from "react";
import ReactDOM from "react-dom";
var axios = require("axios");

export default class Maps extends React.Component {
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
      //  lat: lat,
      //  lng: lon
      // },
      zoom: 16
    });
  }


  render() {
    console.log('4');
    // const mapStyle = {
    //   width: 600,
    //   height: 300,
    //   border: '1px solid black'
    // };
   	
    return (
      <div id="mapDisplay">
        <h1>DONATE</h1>
        <div id="donateIntroRow" className="row">
          <div className="col-md-6">
            <img id="mapIntroImg" src="style/main-p3.jpg"/>
          </div>
          <div id="donateDescription" className="col-md-6">
            <h3>How To Donate</h3>
            <p>Search below for your local food pantry. We hope this way we can build a community that focuses on lessening food waste and also helping those in need. </p>
            <br/>
            <p>Every year, tons of food goes to waste when it can be donated to those in need. This food waste also contributes to many enviornmental issues due to the amount of methane gas produced. We hope by promoting donations this will not only help you keep a clean fridge, but also a clean community, and ultimately..a clean planet. </p>
          </div>
        </div>
        <div id="mapSearchRow" className="row">
          <input type="text" className="form-control" aria-label="..." id="input" id="mapSearch" placeholder="Search Places" value={this.state.input} onChange={this.handleChange.bind(this)} required/>
          <button id="mapBtn" onClick={this.handleClick.bind(this)}>Search</button>
        </div>
        <h1>Nearby Food Pantries</h1>
        <div ref="map" id="mymap">I should be a map!</div>
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

