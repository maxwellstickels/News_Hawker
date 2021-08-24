import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SavedArticles from "./components/SavedArticles";
// import { search } from './utils/API'


function App() {
  
  const spaceDiv = {
    height: "60px"
  };

  return (
    <Router>
      <div className="body-overlay" style={{backgroundImage:"url(brick.jpeg)"}}>
        <Header/>
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
