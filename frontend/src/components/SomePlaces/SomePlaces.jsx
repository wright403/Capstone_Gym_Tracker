// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "100vh",
//   width: "100vw",
// };
// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// const center = {
//   lat: 43.6532,
//   lng: -79.3832,
// };

// export default function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });
//   const [markers, setMarkers] = React.useState([]);
//   const [selected, setSelected] = React.useState(null);

//   const onMapClick = React.useCallback((e) => {
//     setMarkers((current) => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date(),
//       },
//     ]);
//   }, []);

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <h1>
//         Bears{" "}
//         <span role="img" aria-label="tent">
//           ⛺️
//         </span>
//       </h1>

//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />

//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         options={options}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => {
//               setSelected(marker);
//             }}
//             icon={{
//               url: `/bear.svg`,
//               origin: new window.google.maps.Point(0, 0),
//               anchor: new window.google.maps.Point(15, 15),
//               scaledSize: new window.google.maps.Size(30, 30),
//             }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <h2>
//                 <span role="img" aria-label="bear">
//                   🐻
//                 </span>{" "}
//                 Alert
//               </h2>
//               <p>Spotted {formatRelative(selected.time, new Date())}</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import axios from 'axios';
// const DistanceMatrix = (props) => {
    
    
  


  
  
  
  const google = window.google
    
    
    
//     function initMap() {
//         const bounds = new google.maps.LatLngBounds();
//         const markersArray = [];
//         const map = new google.maps.Map(document.getElementById("map"), {
//           center: { lat: 55.53, lng: 9.4 },
//           zoom: 10,
//         });
//         // initialize services
//         const geocoder = new google.maps.Geocoder();
//         const service = new google.maps.DistanceMatrixService();
//         // build request
//         const origin1 = { lat:37.0902, lng:-95.7129, };
//         const origin2 = "Greenwich, England";
//         const destinationA = "Stockholm, Sweden";
//         const destinationB = { lat: 50.087, lng: 14.421 };
//         const request = {
//           origins: [origin1, origin2],
//           destinations: [destinationA, destinationB],
//           travelMode: google.maps.TravelMode.DRIVING,
//           unitSystem: google.maps.UnitSystem.METRIC,
//           avoidHighways: false,
//           avoidTolls: false,
//         };
      
//         // put request on page
//         document.getElementById("request").innerText = JSON.stringify(
//           request,
//           null,
//           2
//         );
//         // get distance matrix response
//         service.getDistanceMatrix(request).then((response) => {
//           // put response
//           document.getElementById("response").innerText = JSON.stringify(
//             response,
//             null,
//             2
//           );
      
//           // show on map
//           const originList = response.originAddresses;
//           const destinationList = response.destinationAddresses;
      
//           deleteMarkers(markersArray);
      
//           const showGeocodedAddressOnMap = (asDestination) => {
//             const handler = ({ results }) => {
//               map.fitBounds(bounds.extend(results[0].geometry.location));
//               markersArray.push(
//                 new google.maps.Marker({
//                   map,
//                   position: results[0].geometry.location,
//                   label: asDestination ? "D" : "O",
//                 })
//               );
//             };
//             return handler;
//           };
      
//           for (let i = 0; i < originList.length; i++) {
//             const results = response.rows[i].elements;
      
//             geocoder
//               .geocode({ address: originList[i] })
//               .then(showGeocodedAddressOnMap(false));
      
//             for (let j = 0; j < results.length; j++) {
//               geocoder
//                 .geocode({ address: destinationList[j] })
//                 .then(showGeocodedAddressOnMap(true));
//             }
//           }
//         });
//       }
      
//       function deleteMarkers(markersArray) {
//         for (let i = 0; i < markersArray.length; i++) {
//           markersArray[i].setMap(null);
//         }
      
//         markersArray = [];
//       }
      
//       window.initMap = initMap;
// const [reviewText, setReviewText] = useState("");
// const [user, token] = useAuth();

// const postreview = async (newReview) => {
//     try {
//       let result = await axios
//         .post("http://127.0.0.1:8000/api/gyms/", newReview, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then(console.log("This is coming from your then statment!"));
      
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   function handleSubmit(event) {
//     event.preventDefault();
//     let newReview = {
//       review_id: props.review_id,
//       review: `${reviewText}`,
//       likes: 0,
//       dislikes: 0,
//     };
//     console.log(reviewText);
//     postreview(newReview);
//     console.log("HandleSubmit");
//   }
    
    
    
    
    
    
    
    
    
    
    
    
    
//     return ( 
//         ''
//      );
// }
 
// export default DistanceMatrix;
