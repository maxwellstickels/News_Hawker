import './App.css';
import { useLazyQuery } from '@apollo/client';
import { GET_ARTICLE } from './utils/queries';
import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Search from './components/Search';
// import { search } from './utils/API'




function App() {

  const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);
  console.log(data);

  const [searchState, setSearchState] = useState('');

  const onSearch = async () => {
    // let result = await search(searchState);
    console.log(searchState)
  
    getArticle({variables: {search:searchState}});
  }
  
  const spaceDiv = {
    height: "60px"
  };

  const inlineBlock = {
    display: "inline-block"
  }

  return (
    <div className="body-overlay">
      <Header/>
      <div id="search">
        <div style={inlineBlock}>
            <h3 className="search-header"><b>SEARCH ARTICLE BY NAME: </b></h3>
            <input id="topic-search" onChange={(event)=> {
              let { name, value } = event.target;
              console.log(name);
              setSearchState(value)
            }}/>
            <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
        </div>
      </div>
      <Main/>
      <div style={spaceDiv}></div>
      <Footer/>
    </div>
  );
}

export default App;
