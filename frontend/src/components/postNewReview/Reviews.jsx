import React, { useState, useEffect } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import PostNewReview from './PostNewReview';

import axios from 'axios';
const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [requestReload, setRequestReload] = useState(true);
 

  useEffect(() => {
    if (requestReload) {
      makeGetRequest();
      setRequestReload(false);
    }
  }, [requestReload]);

  

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        'http://127.0.0.1:8000/api/gyms/reviews/'
      );
      setReviews(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  


    
    
    
    
    
    return ( 
      <div>
      <div className="post-review">
      <PostNewReview placeId={props.place_id} reloadReviews={makeGetRequest} />
      </div>
      {reviews &&
        reviews
          .slice(0)
          .reverse()
          .map((review, i) => (
            <div className="review-reply-wrapper">
              <div className="review-wrapper">
                
                <p>{review.text}</p>
                <div className="likes-dislikes-wrapper">
                  <LikeButton
                    likes={review.likes}
                    review_id={review.id}
                    reloadComments={makeGetRequest}
                    dislikes={review.dislikes}
                    
                  />
                  
                  <p>{review.likes - review.dislikes}</p>
                  
                </div>
              </div>
              
            </div>
          ))}
    </div>
     );

} 
export default Reviews;