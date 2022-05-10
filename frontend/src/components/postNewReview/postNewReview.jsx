import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ReviewForm from "./ReviewForm";

const postNewReview = (props) => ({
  review,
  replies,
  setActiveReview,
  activeReview,
  updateReview,
  deleteReview,
  addReview,
 
  currentUserId,
}) => {
  const isEditing =
    activeReview &&
    activeReview.id === review.id &&
    activeReview.type === "editing";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(review.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === review.userId === 0 && !timePassed;
  
  const canEdit = currentUserId === review.userId && !timePassed;
  
  const createdAt = new Date(review.createdAt).toLocaleDateString();
    
    
    
    return ( 
      <div key={review.id} className="review">
      <div className="review-image-container">
        
      </div>
      <div className="review-right-part">
        <div className="review-content">
          <div className="review-author">{review.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="review-text">{review.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={review.body}
            handleSubmit={(text) => updateReview(text, review.id)}
            handleCancel={() => {
              setActiveReview(null);
            }}
          />
        )}
        <div className="review-actions">
          {canReply && (
            <div
              className="review-action"
              onClick={() =>
                setActiveReview({ id: review.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="review-action"
              onClick={() =>
                setActiveReview({ id: review.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="review-action"
              onClick={() => deleteReview(review.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <ReviewForm
            submitLabel="Reply"
            handleSubmit={(text) => addReview(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <postNewReview
                comment={reply}
                key={reply.id}
                setActiveReview={setActiveReview}
                activeReview={activeReview}
                updateReview={updateReview}
                deleteReview={deleteReview}
                addReview={addReview}
                
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
     );
}
 
export default postNewReview;