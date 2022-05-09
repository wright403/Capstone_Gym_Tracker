// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Places from "./components/Places/Places"






// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LikeButton from "./components/likeButton/LikeButton";
import Map from "./components/Map/Map";
import Navbar from "./components/NavBar/NavBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import DistanceMatrix from "./pages/DisplayReviewPage/DistanceMatrix";
// import SomePlaces from "./components/SomePlaces/SomePlaces";



function App() {
  const [search, setSearch] = useState();
  const [startSearch, setStartSearch] = useState(true);
  const [gymData, setgymData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gymLocation, setGymLocation] = useState();

  useEffect(()=>{
    const fetchGyms = async () =>{
      
      // let response= await axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyDhCIYabN6_q32jeqmG_0FSLsOvZ5jrwc0&libraries=places&callback=initMap')
      // setgymData(response.data.results)
      
    }
    // fetchGyms();
  }, [])
  
  
  
  useEffect(() => {
    // fetchlocations();
  }, []);
  
  
  
  
  // async function fetchlocations(){
  //   // let response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw')
  //   setGymLocation(response.data.results);
  // }
  
  
  
  
  
  
  
  return (
    <div>
      
      
     
      {/* <SomePlaces /> */}
      <Places  />
      <Navbar   />
      
      
      
     
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage  />
              
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/distance" element={<DistanceMatrix />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
