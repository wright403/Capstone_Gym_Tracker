import React, { useState, useEffect } from "react";
import UseAuth from "../../hooks/useAuth";
import axios from "axios";


const LikeButton = (props) => {
  const[likeActive, setLikeActive] = useState(false)
  const[dislikeActive, setDisLikeActive] = useState(true)
  const[like,setlike] = useState(0)
  const[dislike,setDislike] = useState(0)
    
    const likeReview = async () => {
        try {
          await axios.put(
            `http://127.0.0.1:8000/api/comments/like/${props.review_id}/`,
            {
             
            }
          );
        } catch (error) {
          console.log(error.message);
    
    }
    }    
    
    
    function Likethereview(){
      console.log("like: ", likeActive)
      if (likeActive) {
          console.log("inside conditional")
          setLikeActive(false)
          setlike(like-1)
      }else{
        setLikeActive(true)
        setlike(like+1)
        if(dislikeActive){
          setDisLikeActive(false)
          setlike(like+1)
          setDislike(dislike-1)

        }
        }
          
      }
      // alert(`You liked the review - Liked: ${likeActive}` )
  
    
    
    
    function Dislikethereview(){
      console.log("dislike: ", dislikeActive)
      if(dislikeActive){
        setDisLikeActive(false)
        setDislike(dislike-1)
      }else{
        setDisLikeActive(true)
        setDislike(dislike+1)
        if(likeActive){
          setLikeActive(false)
          setDislike(dislike+1)
          setlike(like-1)
        }
      }
      }
      // alert(`You disliked the review - disLiked: ${dislikeActive}` )
    
    
    
    
    
    
    
    return ( 
        <div key={props.review_id}>
       <button onClick={Likethereview} className='btn btn-primary'>like {likeActive}</button>
       <button onClick={Dislikethereview} className='btn btn-danger'>dislike {dislikeActive}</button>
    </div>
     );
}
 
export default LikeButton;