import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const DisLikeButton = (props) => {
    const [user, token] = useAuth();

    const dislikereview = async () => {
        try {
          await axios.put(
            `http://127.0.0.1:8000/api/comments/dislike/${props.review_id}/`,
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
    
    
    function handledisLike() {
        dislikereview();
      }
    
    
    
    return ( 
    <div key={props.review_id}>
      <button className="dislike-button" onClick={handledisLike}></button>
    </div>
     );
}
 
export default DisLikeButton;