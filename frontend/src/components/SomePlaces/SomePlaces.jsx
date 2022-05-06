// import React, { useState } from 'react';
// import PlacesAutocomplete from "react-places-autocomplete"
// import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

// const SomePlaces = (props) => {
    
    
//     const Places = (props) => {
//       const [address, setAddress] = useState("")
//       const [coordinates, setCoordinates] = useState({
//         lat:null,
//         lng:null
//       })
      
//       const handleSelect = async value => {
//         console.log(value);
//         const results = geocodeByAddress(value);
//         const latlng = getLatLng(results[0]);
//         setAddress(value);
//         setCoordinates(latlng)
//       };
    
//       const handleChange = (value) => {
//         console.log(value)
//         setAddress(value)
//       }
      
      
//       return ( 
//         <div>
//          <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
//          {({getInputProps, suggestions, getSuggestionItemProps}) => (
//            <div>
//              <p> Latitude: {coordinates.lat}</p>
//              <p> Longitude: {coordinates.lng}</p>
//              <input {...getInputProps({placeholder: "Type address"})} />
//              <div className="autocomplete-dropdown-container">
//                {/* {loading? <div>...loading</div>: null} */}
//                {suggestions.map((suggestion) => {
//                  <div {...getSuggestionItemProps(suggestions)}>{suggestion.description}</div>;
//                })}
//              </div>
//            </div>
//          )}
//          </PlacesAutocomplete>
//         </div>
//        );
//     }
// } 
// export default SomePlaces;