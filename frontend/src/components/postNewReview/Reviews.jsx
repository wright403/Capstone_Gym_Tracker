import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import postNewReview from './postNewReview';
const Reviews = (props) => {
    
const getAllReviews = async (newReview) => {
    try {
      let result = await axios
        .get("http://127.0.0.1:8000/api/gyms/reviews/",
        (result.data)
        )
        .then(console.log("This is coming from your then statment!"));
      
    } catch (error) {
      console.log(error.message);
    }
  };

const createReview = async (newReview) => {
    try {
      let result = await axios
        .get("http://127.0.0.1:8000/api/gyms/",
        (result.data) 
        )
        .then(console.log("This is coming from your then statment!"));
      
    } catch (error) {
      console.log(error.message);
    }
  };

const updateTheReview = async (updateReview) => {
    try {
      let result = await axios
        .put(`http://127.0.0.1:8000/api/gyms/update/${review_id}/`,
        (result.data)
        )
        .then(console.log("This is coming from your then statment!"));
      
    } catch (error) {
      console.log(error.message);
    }
  };


const [backendReviews, setBackendReviews] = useState([]);
const [activeReviews, setActiveReviews] = useState(null);
const rootReviews = backendReviews.filter(
  (backendReview) => backendReview.user_id === null
);

const addReview = (text, user_id) => {
  createReview(text, user_id).then((review) => {
    setBackendReviews([review, ...backendReviews]);
    setActiveReviews(null);
  });
};

const updateReview = (text, review_id) => {
  updateTheReview(text).then(() => {
    const updatedBackendReviews = backendReviews.map((backendReview) => {
      if (backendReview.id === review_id) {
        return { ...backendReview, body: text };
      }
      return backendComment;
    });
    setBackendReviews(updatedBackendReviews);
    setActiveReviews(null);
  });
};
const deleteReview = (review_id) => {
  if (window.confirm("Are you sure you want to remove comment?")) {
    updateTheReview().then(() => {
      const updatedBackendReviews = backendReviews.filter(
        (backendReviews) => backendReviews.id !== review_id
      );
      setBackendReviews(updatedBackendReviews);
    });
  }
};

useEffect(() => {
  getAllReviews().then((data) => {
    setBackendComments(data);
  });
}, []);

    
    
    
    
    
    return ( 
        <div className="reviews">
      <h3 className="reviews-title">Reviews</h3>
      <div className="reviews-form-title">Write Review</div>
      <ReviewForm submitLabel="Write" handleSubmit={addReview} />
      <div className="reviews-container">
        {rootReviews.map((rootReview) => (
          <postNewReview
            key={rootReview.id}
            review={rootReview}
            
            activeReview={activeReviews}
            setActiveReview={setActiveReviews}
            addReview={addReview}
            deleteReview={deleteReview}
            updateReview={updateReview}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
     );

} 
export default Reviews;