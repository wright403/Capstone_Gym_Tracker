import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import "./PostNewReview.css";
import Placeinfo from "./Placeinfo";

const PostNewReview = (props) => {
  const [reviewText, setReviewText] = useState("");
 
  const postReview = async (newReview) => {
    try {
      console.log(newReview)
      let request = await axios
        .post("http://127.0.0.1:8000/api/gyms/", newReview 
          
        )
        .then(console.log("then statement!"));
        setReviewText(request.data)
      props.reloadReviews();
      resetReview();
    } catch (error) {
      console.log(error.message);
    }
  };
    
    
  function handleSubmit(event) {
    event.preventDefault();
    let newReview = {
      
    
      review: `${reviewText}`,
      
      likes: 0,
      dislikes: 0,
      place_id: props.place_id
    };
    console.log(reviewText);
    postReview(newReview);
    console.log(" handleSubmit");
  }
  
  const resetReview = () => {
    setReviewText(" ");
    console.log(reviewText);
  };
  
  
  
  
  return ( 
    <div className="post-comment-box">
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Add a review..."
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        />
        <button type="submit">Review</button>
      </div>
    </form>
  </div>
     );
}
 
export default PostNewReview;