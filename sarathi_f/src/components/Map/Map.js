import { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router"
import './Map.css';
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'
import { render } from '@testing-library/react'
import '@tomtom-international/web-sdk-maps/dist/maps.css';
// import '@tomtom-international/web-sdk-plugin-zoomcontrols/dist/ZoomControls.css';
// import '@tomtom-international/web-sdk-plugin-pancontrols/dist/PanControls.css';
// import '@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css';
// import ZoomControls from '@tomtom-international/web-sdk-plugin-zoomcontrols';
// import PanControls from '@tomtom-international/web-sdk-plugin-pancontrols';
import { services } from '@tomtom-international/web-sdk-services';
// import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import { plugins } from 'pretty-format';
import Navbar from '../navbar/Navbar';
import ScrollLock from 'react-scrolllock';
import Dprofile from '../Driver-profile/Dprofile';
import img from "./images/Amb.png"
import { DataNavigation } from 'react-data-navigation';

var random_name = require('random-indian-name');



function Map() {


  const [display, setDisplay] = useState(true)


  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [lat_1, setLatitude_1] = useState("");
  const [lon_1, setLongitude_1] = useState("");
  const [lat_2, setLatitude_2] = useState("");
  const [lon_2, setLongitude_2] = useState("");
  const [city_1, setCity_1] = useState("");
  const [city_2, setCity_2] = useState("");
  const [totalTime, setTotalTime] = useState("0");
  const [totalDistance, setTotalDistance] = useState("0");
  const [trafficDelay, setTrafficDellay] = useState("0");
  const [cost, setCost] = useState("0");
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [add_1, setAdd_1] = useState("");
  const [add_2, setAdd_2] = useState("");
  const [amb_lat, setAmb_lat] = useState("")
  const [amb_lon, setAmb_lon] = useState("")
  const [ambDist, setAmbDist] = useState("")
  const [ambTime, setAmbTime] = useState("")

  const [amb_lat_1, setAmb_lat_1] = useState("")
  const [amb_lon_1, setAmb_lon_1] = useState("")
  const [amb_lat_2, setAmb_lat_2] = useState("")
  const [amb_lon_2, setAmb_lon_2] = useState("")
  const [amb_lat_3, setAmb_lat_3] = useState("")
  const [amb_lon_3, setAmb_lon_3] = useState("")
  const [amb_lat_4, setAmb_lat_4] = useState("")
  const [amb_lon_4, setAmb_lon_4] = useState("")

  const [driver_0, setDriver_0] = useState("")
  const [driver_1, setDriver_1] = useState("")
  const [driver_2, setDriver_2] = useState("")
  const [driver_3, setDriver_3] = useState("")
  const [driver_4, setDriver_4] = useState("")
  const [driver_5, setDriver_5] = useState("")

  const [driverName_0, setDriverName_0] = useState("")
  const [driverName_1, setDriverName_1] = useState("")
  const [driverName_2, setDriverName_2] = useState("")
  const [driverName_3, setDriverName_3] = useState("")
  const [driverName_4, setDriverName_4] = useState("")

  const [renders, setrender] = useState(0);


  // var ll = new tt.LngLat(lon_2, lat_2);
  var ll = new tt.LngLat(85.32528, 23.3699);

  const history = useHistory()
  const profile = () => {
    //   axios.post("http://localhost:9005/login",user )
    //   .then(res => {
    //  console.log(res)
    //   alert(res.data.message)
    //    setLoginUser(res.data.user)
    history.push("/dprofile");
    window.location.reload();
  }

  useEffect(() => {
    // const ttZoomControls = new ZoomControls({
    //   className: 'my-class-name', // default = ''
    //   animate: true // deafult = true
    // });
    // const ttPanControls = new PanControls({
    //   className: 'my-class-name', // default = ''
    //   panOffset: 150 // default = 100
    // });

    setDriverName_0(random_name({ random: Math.random, female: false }))
    setDriverName_1(random_name({ random: Math.random, female: false }))
    setDriverName_2(random_name({ random: Math.random, female: false }))
    setDriverName_3(random_name({ random: Math.random, female: false }))
    setDriverName_4(random_name({ random: Math.random, female: false }))

    let map = tt.map({
      key: "xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D",
      container: mapElement.current,
      style: {
        map: 'basic_main',
        trafficIncidents: 'incidents_s0',
        traffic_flow: 'low_relative-delay'
      },
      center: [85.32528, 23.3699],
      zoom: 14,
    });
    map.addControl(new tt.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: false
      },
      trackUserLocation: true
    }));

    // map.addControl(ttZoomControls, 'top-left');
    // map.addControl(ttPanControls, 'bottom-right');
    var nav = new tt.NavigationControl({
      showExtendedRotationControls: true,
      showPitch: true,
      showExtendedPitchControls: true
    });
    map.addControl(nav, 'top-left');

    setMap(map);
    return () => map.remove();

  }, []);






  function getData(e) {
    e.preventDefault();
    setrender(0)
    setValue_1("");
    setCity_1("");
    fetch(`https://api.tomtom.com/search/2/search/${city_1}.json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&lat=37.8085&lon=-122.4239`).then((result) => {
      result.json().then((resp) => {
        // setCity_1(resp);
        console.log(resp.results[0].address.freeformAddress);
        setLatitude_1(resp.results[0].position.lat);
        setLongitude_1(resp.results[0].position.lon);
        setAdd_1(resp.results[0].address.freeformAddress);

        fetch(`https://api.tomtom.com/search/2/poiSearch/Hospital.JSON?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&lat=${resp.results[0].position.lat}&lon=${resp.results[0].position.lon}`).then((result) => {
          result.json().then((nearest) => {
            console.log(nearest.results[0].position.lat);
            console.log(nearest.results[0].position.lon);
            setAmb_lat(nearest.results[0].position.lat)
            setAmb_lon(nearest.results[0].position.lon)
            setAmb_lat_1(nearest.results[1].position.lat)
            setAmb_lon_1(nearest.results[1].position.lon)
            setAmb_lat_2(nearest.results[2].position.lat)
            setAmb_lon_2(nearest.results[2].position.lon)
            setAmb_lat_3(nearest.results[3].position.lat)
            setAmb_lon_3(nearest.results[3].position.lon)
            setAmb_lat_4(nearest.results[4].position.lat)
            setAmb_lon_4(nearest.results[4].position.lon)
          })
        })

        setValue_2("");
        setCity_2("");
        fetch(`https://api.tomtom.com/search/2/search/${city_2}.json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&lat=37.8085&lon=-122.4239`).then((result) => {
          result.json().then((res) => {
            // setCity(resp);
            console.log(res.results[0].address.freeformAddress);
            setLatitude_2(res.results[0].position.lat);
            setLongitude_2(res.results[0].position.lon);
            setAdd_2(res.results[0].address.freeformAddress);

          })
        })


      })
    })





    setTotalDistance(0);
    setTotalTime(0);
    setTrafficDellay(0);
    setCost(0);
    setAmbDist(0);
    setAmbTime(0);
    alert("Your Adresses are save please click on'Map Directions' to get the details")
  }


  function route() {
    setrender(1);
    // const ttZoomControls = new ZoomControls({
    //   className: 'my-class-name', // default = ''
    //   animate: true // deafult = true
    // });
    // const ttPanControls = new PanControls({
    //   className: 'my-class-name', // default = ''
    //   panOffset: 150 // default = 100
    // });

    let map = tt.map({

      key: "xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D",
      container: mapElement.current,
      style: {
        map: 'basic_main',
        trafficIncidents: 'incidents_day',
      },
      zoom: 15,
      center: [lon_1, lat_1],
      center: ll,
      pitch: 25,
    })
    map.flyTo({
      center: [lon_1, lat_1],
    })
    map.addControl(new tt.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: false
      },
      trackUserLocation: true
    }));
    var nav = new tt.NavigationControl({
      showExtendedRotationControls: true,
      showPitch: true,
      showExtendedPitchControls: true
    });
    map.addControl(nav, 'top-left');

    // map.addControl(ttZoomControls, 'top-left');
    // map.addControl(ttPanControls, 'bottom-right');

    var marker_1 = new tt.Marker()
      .setLngLat([lon_1, lat_1])
      .addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      'bottom-right': [0, -70],
      'bottom-left': [0, -70],
      left: [25, -35],
      right: [-25, -35]
    }

    var popup = new tt.Popup({ offset: popupOffsets }).setHTML(`You are here : ${add_1}`);
    marker_1.setPopup(popup).togglePopup();

    const element_Hospital = document.createElement('div')
    element_Hospital.className = 'marker_2'
    var marker_2 = new tt.Marker({ element: element_Hospital })
      .setLngLat([lon_2, lat_2])
      .addTo(map);

    var popup = new tt.Popup({ offset: popupOffsets }).setHTML(`Destination : ${add_2}`);
    marker_2.setPopup(popup).togglePopup();





    fetch(`https://api.tomtom.com/search/2/poiSearch/Hospital.JSON?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&lat=${lat_1}&lon=${lon_1}`).then((result) => {
      result.json().then((search) => {
        // console.log(search.results[0].position);
        const element = document.createElement('div')
        element.className = 'H_marker_1'
        var H_marker_1 = new tt.Marker({ element: element })
          .setLngLat([search.results[0].position.lon, search.results[0].position.lat])
          .addTo(map);
        var popup_1 = new tt.Popup({ offset: popupOffsets })
        // .setHTML("this is Ambulance");
        H_marker_1.setPopup(popup_1).togglePopup();


        ttapi.services.calculateRoute({
          key: 'xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D',
          traffic: true,
          locations: `${amb_lon},${amb_lat}:${lon_1},${lat_1}`,
          'computeTravelTimeFor': 'all'
        })
          .then(function (response) {
            console.log(response)
            console.log(response.toGeoJson)
            var geojson = response.toGeoJson();
            console.log(response.toGeoJson)
            map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': {
                'type': 'geojson',
                'data': geojson
              },
              'paint': {
                'line-color': '#FF0000',
                'line-width': 3
              }
            });
          });
        const element_1 = document.createElement('div')
        element_1.className = 'H_marker_1'
        var H_marker_2 = new tt.Marker({ element: element_1 })
          .setLngLat([search.results[1].position.lon, search.results[1].position.lat])
          .addTo(map);
        const element_2 = document.createElement('div')
        element_2.className = 'H_marker_1'
        var H_marker_3 = new tt.Marker({ element: element_2 })
          .setLngLat([search.results[2].position.lon, search.results[2].position.lat])
          .addTo(map);
        const element_3 = document.createElement('div')
        element_3.className = 'H_marker_1'
        var H_marker_4 = new tt.Marker({ element: element_3 })
          .setLngLat([search.results[3].position.lon, search.results[3].position.lat])
          .addTo(map);
        const element_4 = document.createElement('div')
        element_4.className = 'H_marker_1'
        var H_marker_5 = new tt.Marker({ element: element_4 })
          .setLngLat([search.results[4].position.lon, search.results[4].position.lat])
          .addTo(map);
        const element_5 = document.createElement('div')
        element_5.className = 'H_marker_1'
        var H_marker_6 = new tt.Marker({ element: element_5 })
          .setLngLat([search.results[5].position.lon, search.results[5].position.lat])
          .addTo(map);
        const element_6 = document.createElement('div')
        element_6.className = 'H_marker_1'
        var H_marker_7 = new tt.Marker({ element: element_6 })
          .setLngLat([search.results[6].position.lon, search.results[6].position.lat])
          .addTo(map);
        const element_7 = document.createElement('div')
        element_7.className = 'H_marker_1'
        var H_marker_8 = new tt.Marker({ element: element_7 })
          .setLngLat([search.results[7].position.lon, search.results[7].position.lat])
          .addTo(map);
        const element_8 = document.createElement('div')
        element_8.className = 'H_marker_1'
        var H_marker_9 = new tt.Marker({ element: element_8 })
          .setLngLat([search.results[8].position.lon, search.results[8].position.lat])
          .addTo(map);
        const element_9 = document.createElement('div')
        element_9.className = 'H_marker_1'
        var H_marker_10 = new tt.Marker({ element: element_8 })
          .setLngLat([search.results[9].position.lon, search.results[9].position.lat])
          .addTo(map);
        const element_10 = document.createElement('div')
        element_10.className = 'H_marker_1'


      })
    })



    ttapi.services.calculateRoute({
      key: 'xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D',
      traffic: true,
      locations: `${lon_1},${lat_1}:${lon_2},${lat_2}`,
      'computeTravelTimeFor': 'all'
    })
      .then(function (response) {
        console.log(response)
        console.log(response.toGeoJson)
        var geojson = response.toGeoJson();
        console.log(response.toGeoJson)
        map.addLayer({
          'id': 'route1',
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': geojson
          },
          'paint': {
            'line-color': '#4a90e2',
            'line-width': 8
          }
        });
      });

    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${lat_1},${lon_1}:${lat_2},${lon_2}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((resl) => {

        // console.log(resl);
        console.log("Total Length : " + resl.routes[0].summary.lengthInMeters / 1000 + "KM");
        console.log("Total traffic Delay : " + resl.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        console.log("Total Time : " + resl.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setTotalDistance((resl.routes[0].summary.lengthInMeters / 1000).toFixed(2));
        setTotalTime((resl.routes[0].summary.travelTimeInSeconds / 3600).toFixed(2));
        setTrafficDellay((resl.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        setCost(((resl.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));
      })
    })
    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${amb_lat},${amb_lon}:${lat_1},${lon_1}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((distance) => {

        // console.log(resl);
        console.log("Ambulance to Patient Distance: " + distance.routes[0].summary.lengthInMeters + "meters");
        console.log("Total traffic Delay : " + distance.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        console.log("Total Time form Ambulance to Patient: " + distance.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setAmbDist(distance.routes[0].summary.lengthInMeters);
        setDriver_0(distance.routes[0].summary.lengthInMeters)
        DataNavigation.setData('driver_0', distance.routes[0].summary.lengthInMeters)
        setAmbTime((distance.routes[0].summary.travelTimeInSeconds / 60).toFixed(2));
        // setTrafficDellay((distance.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        // setCost(((distance.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));

      })
    })

    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${amb_lat_1},${amb_lon_1}:${lat_1},${lon_1}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((distance) => {

        // console.log(resl);
        // console.log("Ambulance to Patient Distance: " + distance.routes[0].summary.lengthInMeters + "meters");
        // console.log("Total traffic Delay : " + distance.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        // console.log("Total Time form Ambulance to Patient: " + distance.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setDriver_1((distance.routes[0].summary.lengthInMeters));
        DataNavigation.setData('driver_1', distance.routes[0].summary.lengthInMeters)
        // setAmbTime((distance.routes[0].summary.travelTimeInSeconds / 60).toFixed(2));
        // setTrafficDellay((distance.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        // setCost(((distance.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));

      })
    })

    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${amb_lat_2},${amb_lon_2}:${lat_1},${lon_1}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((distance) => {

        // console.log(resl);
        // console.log("Ambulance to Patient Distance: " + distance.routes[0].summary.lengthInMeters + "meters");
        // console.log("Total traffic Delay : " + distance.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        // console.log("Total Time form Ambulance to Patient: " + distance.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setDriver_2((distance.routes[0].summary.lengthInMeters));
        DataNavigation.setData('driver_2', distance.routes[0].summary.lengthInMeters)
        // setAmbTime((distance.routes[0].summary.travelTimeInSeconds / 60).toFixed(2));
        // setTrafficDellay((distance.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        // setCost(((distance.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));

      })
    })

    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${amb_lat_3},${amb_lon_3}:${lat_1},${lon_1}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((distance) => {

        // console.log(resl);
        // console.log("Ambulance to Patient Distance: " + distance.routes[0].summary.lengthInMeters + "meters");
        // console.log("Total traffic Delay : " + distance.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        // console.log("Total Time form Ambulance to Patient: " + distance.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setDriver_3((distance.routes[0].summary.lengthInMeters));
        DataNavigation.setData('driver_3', distance.routes[0].summary.lengthInMeters)
        // setAmbTime((distance.routes[0].summary.travelTimeInSeconds / 60).toFixed(2));
        // setTrafficDellay((distance.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        // setCost(((distance.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));

      })
    })

    fetch(`https://api.tomtom.com/routing/1/calculateRoute/${amb_lat_4},${amb_lon_4}:${lat_1},${lon_1}/json?key=xmGDg3yi0bPcCsg8sb6hIuKqGglCZw4D&routeRepresentation=polyline&computeTravelTimeFor=all`).then((result) => {
      result.json().then((distance) => {

        // console.log(resl);
        // console.log("Ambulance to Patient Distance: " + distance.routes[0].summary.lengthInMeters + "meters");
        // console.log("Total traffic Delay : " + distance.routes[0].summary.trafficDelayInSeconds / 60 + "minutes");
        // console.log("Total Time form Ambulance to Patient: " + distance.routes[0].summary.travelTimeInSeconds / 3600 + "hour");

        setDriver_4((distance.routes[0].summary.lengthInMeters));
        DataNavigation.setData('driver_4', distance.routes[0].summary.lengthInMeters)
        // setAmbTime((distance.routes[0].summary.travelTimeInSeconds / 60).toFixed(2));
        // setTrafficDellay((distance.routes[0].summary.trafficDelayInSeconds / 60).toFixed(2));
        // setCost(((distance.routes[0].summary.lengthInMeters * 40) / 1000).toFixed(2));

      })
    })

    function popup_cancel() {
      window.location.reload()
    }

    function getDriver(e){
      console.log(e.target.value)
      DataNavigation.setData('driverName', e.target.value)
      // render(<Dprofile/>)
      setDisplay(false)
      history.push("/dprofile")
    }

    function popup_123() {
      // window.location.reload()
     if(display===true){
      render(
        <ScrollLock>
          <div className="container-1">
            <div className="container-2">
              
              <h3 className="driver-list-head">Choose the Driver</h3>
              <div className="driver-list-container">
                
                <button onClick={getDriver} value={driverName_0} className="driver_name_distance">{driverName_0} :- {DataNavigation.getData('driver_0')} m away</button>
                <button onClick={getDriver} value={driverName_1} className="driver_name_distance">{driverName_1} :- {DataNavigation.getData('driver_1')} m away</button>
                <button onClick={getDriver} value={driverName_2} className="driver_name_distance">{driverName_2} :- {DataNavigation.getData('driver_2')} m away</button>
                <button onClick={getDriver} value={driverName_3} className="driver_name_distance">{driverName_3} :- {DataNavigation.getData('driver_3')} m away</button>
                <button onClick={getDriver} value={driverName_4} className="driver_name_distance">{driverName_4} :- {DataNavigation.getData('driver_4')} m away</button>
              </div>
              <div className="payment-btn-container">
                {/* <button className="payment-btn-cancel payment-btn-confirm" onClick={profile}  >Choos</button> */}
                <button onClick={popup_cancel} className="payment-btn-cancel" >Cancel</button>

              </div>

            </div>
          </div>
        </ScrollLock>
      )
     }
    }
    var x;
    if (renders === 0) {
      render(
        <div className="payment-btn-container">

          <button className="payment-btn" onClick={popup_123} >Continue</button>
          {/* <button onClick={popup_cancel} className="payment-btn-cancel payment-btn-confirm" >Confirm</button> */}
        </div>
      )
    }
  }


  return (
    <>
      <Navbar />
      <div className="Apppp">
        <div >

          <div className="mapper" ref={mapElement}></div>
        </div>
        <div className="map-input-container">
          {/* <h1 className="head">Enter Here...</h1> */}
          <input className="map-input" type="text" placeholder="Patient's Address" value={city_1} onChange={(e) => { setCity_1(e.target.value) }} />
          <input className="map-input" type="text" placeholder="Address of Hospital" value={city_2} onChange={(e) => { setCity_2(e.target.value) }} />
          <div className="map-btn-container">
            <button className="map-input-btn map-input-btn-1" onClick={getData}>Add Address</button>
            <button className="map-input-btn map-input-btn-2" onClick={route} >Map Direction</button>
          </div>
          {/* <div>
            <p>Driver-1 :- {random_name({ random: Math.random, gender: "male" })} :- {driver_0} m</p>
            <p>Driver-2 :- {random_name({ random: Math.random, gender: "male" })} :- {driver_1} m</p>
            <p>Driver-3 :- {random_name({ random: Math.random, gender: "male" })} :- {driver_2} m</p>
            <p>Driver-4 :- {random_name({ random: Math.random, gender: "male" })} :- {driver_3} m</p>
            <p>Driver-5 :- {random_name({ random: Math.random, gender: "male" })} :- {driver_4} m</p>
          </div> */}
          <br />
          {/* <div className="cord cord-1">
          <h3>Latitude : {lat_1}</h3>
          <h3>Longitude : {lon_1}</h3>
        </div>
        <div className="cord cord-1">
          <h3>Latitude : {lat_2}</h3>
          <h3>Longitude : {lon_2}</h3>
        </div> */}
          <div className="cord">
            {
              cost == 0 ? "" : <h4>Total Fare Charge -: ₹{cost}</h4>

            }
            {
              totalDistance == 0 ? "" : <h4>Total Distance -: {totalDistance} KM</h4>
            }
            {
              totalTime == 0 ? "" : <h4>Total Time -: {totalTime} hr</h4>
            }
            {/* {
              ambDist == 0 ? "" : <h3>Ambulance to Patient -: {ambDist} meters</h3>
            }
            {
              ambTime == 0 ? "" : <h3>Time to reach Ambulance -: {ambTime} minutes</h3>
            } */}
            {/* <h3>Total traffic delay (in s) : {trafficDelay} sec</h3> */}
          </div>
        </div>


      </div>

    </>
  );
}

export default Map;