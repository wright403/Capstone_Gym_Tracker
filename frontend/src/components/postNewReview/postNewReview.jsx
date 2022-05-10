import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "./ReviewForm";

const postNewReview = ({ review_id, author, date, text, deleteReview }) => {
  
    
    
    return ( 
      <div className="review">
      {/*<a className="avatar"></a>*/}
      <div className="content">
        <p className="author">{author}</p>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <button className="ui blue submit icon button">Reply</button>
          <button
            className="ui blue submit icon button"
            onClick={() => deleteReview(review_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
     );
}
 
export default postNewReview;