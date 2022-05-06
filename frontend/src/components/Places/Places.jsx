import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../mapStyles/mapStyles';
import PlacesAutocomplete from "react-places-autocomplete"
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxOptionText,
// } from "@reach/combobox";




  const Places = (props) => {
    
    const libraries = ["places"]
    const mapContainerStyle = {
      width: "100vw",
      height: "100vh"
    };
    
    const center = {
      lat: 37.0902,
      lng: -95.7129
    };
    
    const options = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
    };
    
    
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw',
      libraries,
    });
    
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    
    const onMapClick = useCallback((event) => {
      setMarkers((current) => [
        ...current,{
          lat: event.latlng.lat(),
          lng: event.latlng.lng(),
          time: new Date(),
        },
      ]);
    },[]);
    
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
    }, []);
    
    if(loadError) return "error loading maps";
    if(!isLoaded) return "Loading maps";

    
    
    <Search />
    
    
    return ( 
      <div>
        <GoogleMap mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onClick={onMapClick} 
          onLoad={onMapLoad}
        >
          
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{lat: marker.lat, lng: marker.lng}}
            onClick={() => {
              setSelected(marker);
            }}
            />
        ))};
        {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}}>
          <div>
            <h2>Gym Location!</h2>
          </div>
        </InfoWindow>): null}
        </GoogleMap>
      </div>
     );
  }
   function Search(){
     const {ready, value, suggestions: {status, data}, setValue, clearSuggestion} = PlacesAutocomplete({
       requestOptions: {
         location: {lat: () => 37.0902, lng: () => -95.7129},
         radius: 200 * 1000,
       },
     });
    //  return (
    //    <div className='search'>
    //   <Combobox onSelect={(address) =>{
    //     console.log(address);
    //   }}
    //   >
    //     <ComboboxInput value={value} onChange={(e) => {
    //       setValue(e.target.value);
    //     }}
    //     disabled={!ready}
    //     placeholder="Enter an address"
    //     />
    //     <ComboboxPopover>
    //       {status === "OK" && data.map((id, description) => (
    //         <ComboboxOption key={id} value={description} />
    //       ))}
    //     </ComboboxPopover>
    //   </Combobox>
    //   </div>
    //  )
   }
  export default Places;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
