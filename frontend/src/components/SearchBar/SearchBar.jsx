import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
        <div>
      <div className="search-container">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="input-button">
              <input
                className="search-input"
                class="input"
                placeholder="Search"
                type="text"
                value={props.searchTerm}
                onChange={(event) => props.setSearch(event.target.value)}
              />
              <button
                className="btn btn-primary"
                type="Submit"
                
              >Search
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
     );
}
 
export default SearchBar;
