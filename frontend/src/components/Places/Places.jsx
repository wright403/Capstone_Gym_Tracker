import { useState, useMemo, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import mapStyles from "../mapStyles/mapStyles";
import ReviewForm from "../postNewReview/ReviewForm";
import Reviews from "../postNewReview/Reviews";
import PostNewReview from "../postNewReview/PostNewReview";


export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw',
    libraries: ["places"],
  });
  

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
  
}



function Map() {
  const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
  };
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);
  
  
  
  
  
  return (
    <>
    
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected}   />
      </div>
      
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle = {mapContainerStyle}
        mapContainerClassName="map-container"
        options ={options}
        

      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
      
    </>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Locate
    </button>
  );
}








const PlacesAutocomplete = ({ setSelected, panTo }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    
    
    
    
    
    const results = await getGeocode({ address });
    const { lat, lng } =  getLatLng(results[0]);
    
    setSelected({ lat, lng });
  };

  
  
  
  
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};