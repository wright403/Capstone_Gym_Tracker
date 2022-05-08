import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../mapStyles/mapStyles';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Autocomplete from '@mui/material/Autocomplete';
import "./Places.css";
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';



const libraries = ["places"];

  const Places = (props) => {
    
    // const libraries = ["places"];
    const mapContainerStyle = {
      width: "100vw",
      height: "100vh"
    };
    
    const center = {
      lat: 37.0902,
      lng: -95.7129,
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
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    },[]);
    
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
    }, []);
    
    const panTo = useCallback(({lat, lng}) => {
      mapRef.current.panTo({lat, lng});
      mapRef.current.setzoom(14);
    }, [])
    

    if(loadError) return "error loading maps";
    if(!isLoaded) return "Loading maps";

    
    
    
    
    
    return ( 
      
       
    
      
       
       
       <div>
        <Locate panTo={panTo} />
        <Search panTo={panTo} />
        
        
        
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
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              } } />
          ))};
          {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => {
            setSelected(null);
          } }>
            <div>
              <h2>Gym Location!</h2>
            </div>
          </InfoWindow>) : null}
        </GoogleMap>
      </div>
      
     );
  }
  
  function Locate({panTo}) {
    return (
      <button className='locate' onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        }, () => null, );
      }}>
        <img src='' alt="compass"/>
      </button>
    )
  }
  
  function Search({panTo}){
     const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
       requestOptions: {
         location: {lat: () => 37.0902, lng: () => -95.7129},
         radius: 200 * 1000,
       },
     });
     
     
     const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
       
       
     
     
     
     
     try {
      const results = await getGeocode({address});
      const {lat, lng} = getLatLng(results[0]);
      panTo({lat, lng});
    } catch (error) {
      console.log(error);
    }
  }; 
  
     
  
  
  
  
    
     
     
     
     
     return (
      <div className='search'>
        <form onSelect={handleSelect}>
        <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search your location"
        />
        <li>
        {status === "OK" &&
              data.map(({ id, description }) => (
                <option key={id} value={description} />
              ))}
        </li>
      </form>
      </div>
     )
   }

  

    
  export default Places;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
