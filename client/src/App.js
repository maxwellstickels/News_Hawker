import './App.css';
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_ARTICLE } from './utils/queries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SavedArticles from "./components/SavedArticles";
import search from './utils/API'


function App() {
  
  const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);
  console.log(data);

  const [searchState, setSearchState] = useState('');

  const onSearch = async () => {
      
      // let result = await search(searchState);
      console.log(searchState);
      getArticle({variables: {search:searchState}});
  }

  const spaceDiv = {
    height: "60px"
  };

  return (
    <Router>
      <div className="body-overlay" style={{backgroundImage:"url(brick.jpeg)"}}>
        <Header/>
        <section id="search">
            <div style={{display: "inline-block"}}>
                <h3 className="search-header"><b>SEARCH ARTICLE BY NAME:</b></h3>
                <input id="topic-search" onChange={(event)=> {
                    let { name, value } = event.target;
                    setSearchState(value);
                }}/>
                <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
            </div>
        </section>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/saved' component={SavedArticles}/>
          <Route render={() => <NotFound/>} />
        </Switch>
        <div style={spaceDiv}></div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
