import React, { useState } from 'react';
const ReviewForm = ({ submitForm, text, handleChange }) => {
  
    const styles = {
        padding: "25px",
      };
  
    
    
    
    
    
    
    return ( 
        <form className="ui reply form" style={styles} onSubmit={submitForm}>
      <div className="field">
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <button className="ui blue labeled submit icon button" type="submit">
        <i className="icon edit"></i>
        Add Review
      </button>
    </form>
     );
}
 
export default ReviewForm;