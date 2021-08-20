// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
// import Search from './pages/Search';
import { search } from './utils/API'


function App() {

  const [searchState, setSearchState] = useState('');

  const onSearch = async () => {
    let result = await search(searchState)
  }
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
}

export default App;
