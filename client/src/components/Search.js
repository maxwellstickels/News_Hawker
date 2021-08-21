import '../App.css';
import { useLazyQuery } from '@apollo/client';
import { GET_ARTICLE } from '../utils/queries';
import React, { useState } from 'react';

function Search() {
    const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);

    const [searchState, setSearchState] = useState('');
  
    const onSearch = async () => {
      // let result = await search(searchState);
      console.log(searchState)
    
      getArticle({variables: {search:searchState}});
    }
  return (
    <section id="search">
        <div>
            <h3 className="search-header"><b>SEARCH ARTICLE BY NAME:</b></h3>
            <input id="topic-search" onChange={(event)=> {
            let { name, value } = event.target;
            setSearchState(name, value)
            }}/>
            <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
        </div>
    </section>
  );
};

export default Search;