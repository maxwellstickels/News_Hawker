import './App.css';
import { useLazyQuery } from '@apollo/client';
import { GET_ARTICLE } from './utils/queries';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
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
    <Router>
      <div className="body-overlay" style={{backgroundImage:"url(brick.jpeg)"}}>
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
        <Switch>
          <Route exact path='/' component={Main} />
          {/*    <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />     */}
          <Route render={() => <NotFound/>} />
        </Switch>
        <div style={spaceDiv}></div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
