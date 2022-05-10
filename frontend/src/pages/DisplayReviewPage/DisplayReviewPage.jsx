import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const DisplayReviewPage = (props) => {
    
    
    const [title, setTitle] = useState({
        title: "Best Rated gyms",
        vAxis: {minValue: 0},
        colors: ['black']
    
      })

    
    
    
    
              const data = [
                ["Element", "Ratings", { role: "style" }],
                ["Antime Fitness", 8.94, "#b87333"], // RGB value
                ["LA Fitness", 10.49, "silver"], // English color name
                ["Planet Fitness", 19.3, "gold"],
                ["24 hour Fitness", 21.45, "color: #e5e4e2"], // CSS-style declaration
                ["Golds Gym", 20.32, "red"],
              ];
    
    
    
    return(
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={title} />

    )
              
    
  
}
 
export default DisplayReviewPage;