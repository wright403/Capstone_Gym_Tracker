import React, { useState, useEffect } from "react";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";


const LikeButton = (props) => {
    const [user, token] = UseAuth();
    
    const likeReview = async () => {
        try {
          await axios.put(
            `http://127.0.0.1:8000/api/comments/like/${props.review_id}/`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
        } catch (error) {
          console.log(error.message);
    
    }
    }    
    
    
    function handleLike() {
        likeReview();
        
      }
    
    
    
    
    return ( 
        <div key={props.review_id}>
      <button class="like-button" onClick={handleLike}></button>
      
    </div>
     );
}
 
export default LikeButton;