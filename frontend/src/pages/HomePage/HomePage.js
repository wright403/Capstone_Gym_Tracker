import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
  
  const [title, setTitle] = useState({
    title: "Highest revenue gyms",
    vAxis: {minValue: 0},
    colors: ['black']

  })





          const data = [
            ["Element", "Revenue", "Per billions", { role: "style" }],
            ["Lifetime Fitness", 1.9, "#b87333"], // RGB value
            ["LA Fitness", 2.15, "silver"], // English color name
            
            ["24 hour Fitness", 1.47, "color: #e5e4e2"], // CSS-style declaration
            
          ];
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={title} />
      
    </div>
  );
};

export default HomePage;
