// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Footer from "./components/Footer";
// import Search from './pages/Search';
import { search } from './utils/API'


function App() {

  const [searchState, setSearchState] = useState('');

  const onSearch = async () => {
    let result = await search(searchState)
  }
  return (
    <div className="body-overlay">
      
      <div style="height:60px"></div>
      <Footer/>
    </div>
  );
}

export default App;
