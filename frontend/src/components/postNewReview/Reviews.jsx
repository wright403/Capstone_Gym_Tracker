import React, { useState, useEffect } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import DisLikeButton from '../DislikeButton/DislikeButton';
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
        
      </div>
      {reviews &&
        reviews
          .slice(0)
          .reverse()
          .map((review, i) => (
            <div className="review-reply-wrapper">
              <div className="review-wrapper">
                <h4>{review.user.username} </h4>
                <p>{review.text}</p>
                <div className="likes-dislikes-wrapper">
                  <LikeButton
                    likes={review.likes}
                    review_id={review.id}
                    reloadComments={makeGetRequest}
                    
                  />
                  
                  <p>{review.likes - review.dislikes}</p>
                  <DisLikeButton
                    dislikes={review.dislikes}
                    review_id={review.id}
                    reloadReviews={makeGetRequest}
                  />
                </div>
              </div>
              
            </div>
          ))}
    </div>
     );

} 
export default Reviews;