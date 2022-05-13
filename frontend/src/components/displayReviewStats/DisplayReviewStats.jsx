import { Chart } from "react-google-charts";
import React, {useState} from 'react';
const DisplayReviewStats = (props) => {
    
    
    const [title, setTitle] = useState({
        title: "Highest Revenue gyms",
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
}
 
export default DisplayReviewStats;

