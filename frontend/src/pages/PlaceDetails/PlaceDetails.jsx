import React, { useState, useEffect } from 'react';

import axios from 'axios'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";


const PlaceDetails = (props) => {
    
     const [gymData, setgymData] = useState([])
     
    
     useEffect(() => {
        getAllGyms();
        console.log("useEffect");
      }, []);
     
     
     
     
     async function getAllGyms() {
        let response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.4406%2C-79.9959&radius=1500&type=gym&keyword=fitness&key=AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw");
        setgymData(response.data);
      }

      const [address, setAddress] = useState("");
      const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      });
    
      const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
      };
    
      return (
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p>
    
                <input {...getInputProps({ placeholder: "Type address" })} />
    
                <div>
                  {loading ? <div>...loading</div> : null}
    
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                    };
    
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      );


    
    
      
     
}

export default PlaceDetails;