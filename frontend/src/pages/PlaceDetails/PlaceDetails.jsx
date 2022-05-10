// import React, { useEffect, useState } from 'react'
// import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { useHistory, useParams } from 'react-router'
// import axios from 'axios'

// const PlaceDetails = (props) => {
    
//      const [gymData, setgymData] = useState([])
     
    
//      useEffect(() => {
//         getAllGyms();
//         console.log("useEffect");
//       }, []);
     
     
     
     
//      async function getAllGyms() {
//         let response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.4406%2C-79.9959&radius=1500&type=gym&keyword=fitness&key=AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw");
//         setgymData(response.data);
//       }
    
    
      
     
// }

// export default PlaceDetails;