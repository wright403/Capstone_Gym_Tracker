import axios from "axios";
const Placeinfo = (props) => {
    const getVideoInfo = async (place_id) => {
        let placeData = {}  
        let response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.4406%2C-79.9959&radius=1500&type=gym&keyword=fitness&key=AIzaSyCBVbodocWiw5pWiEARM5aiEITUspFy_Gw')
        placeData= response.data.place_id
    }
    
    
    
    
    
    
    return ( 
        getVideoInfo
     );
}
 
export default Placeinfo;