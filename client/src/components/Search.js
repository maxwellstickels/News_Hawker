import React from "react";
import "../App.css";

function Search(props) {
  return (
    <div id="search">
        <div>
            <h3><b>SEARCH ARTICLE BY NAME:</b></h3>
            <input id="topic-search" onChange={(event)=> {
            let { name, value } = event.target;

            setSearchState(name, value)
            }}/>
            <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
        </div>
    </div>
  );
};

export default Search;