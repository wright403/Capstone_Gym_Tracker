import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const likeButton = (props) => {
    const [user, token] = useAuth();
    
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
        <div key={props.comment_id}>
      <button class="like-button" onClick={handleLike}></button>
      
    </div>
     );
}
 
export default likeButton;