import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const postNewReview = (props) => {
    const [reviewText, setReviewText] = useState("");
    const [user, token] = useAuth();

    const postreview = async (newReview) => {
        try {
          let result = await axios
            .post("http://127.0.0.1:8000/api/gyms/", newReview, {
              headers: {
                Authorization: "Bearer " + token,
              },
            })
            .then(console.log("This is coming from your then statment!"));
          
        } catch (error) {
          console.log(error.message);
        }
      };
    
      function handleSubmit(event) {
        event.preventDefault();
        let newReview = {
          review_id: props.review_id,
          review: `${reviewText}`,
          likes: 0,
          dislikes: 0,
        };
        console.log(reviewText);
        postreview(newReview);
        console.log("HandleSubmit");
      }
    
    
    
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
          <button type="submit">review</button>
        </div>
      </form>
    </div>
     );
}
 
export default postNewReview;