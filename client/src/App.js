
import { useLazyQuery } from '@apollo/client';

import { GET_ARTICLE } from './utils/queries';

import React, { useState } from 'react';
// import Search from './pages/Search';
import { search } from './utils/API'




function App() {

  const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);

  const [searchState, setSearchState] = useState('');

  const onSearch = async () => {
    // let result = await search(searchState);
    console.log(searchState)
  
    getArticle({variables: {search:searchState}});
  }
  return (
    
    <div id="search">
      {console.log(data)}
        <div>
            <h3><b>SEARCH ARTICLE BY NAME:</b></h3>
            <input id="topic-search" onChange={(event)=> {
              let { name, value } = event.target;

              setSearchState(value)
            }}/>
            <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
        </div>
    </div>
  );
}

export default App;
