import '../App.css';
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { GET_ARTICLE } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { getSavedNews, savedNewsId } from '../utils/localStorage';
// import { SAVE_ARTICLE } from '../utils/mutations'

function Main(props) {
    var results = [];
    const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);
    if (data) {
      results = data.getArticle;
    }
    const [searchState, setSearchState] = useState('');
    const [savedNews, setSavedNews] = useState(getSavedNews());

    const onSearch = async () => {
        console.log(searchState);
        getArticle({variables: {search:searchState}});
        
    }

    const handleSaveArticle = async (articleId) => {
      const articleToSave = results.find((article) => article.id === articleId);
  
      // get token
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        /* Think this is my problem. What should I actually be calling to save the article? Should I be using the mutation imported on line 7? */
        const response = await savedNewsId(articleToSave, token);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        // if book successfully saves to user's account, save book id to state
        setSavedNews([...savedNews, articleToSave.id]);
      } catch (err) {
        console.error(err);
      }
    };

    return (
        <div>
            <section id="search">
              <div style={{display: "inline-block"}}>
                  <h3 className="search-header"><b>SEARCH ARTICLE BY NAME:</b></h3>
                  <input id="topic-search" onChange={(event)=> {
                      let { name, value } = event.target;
                      setSearchState(value)
                  }}/>
                  <button id="topic-submit" onClick={onSearch}><i>SUBMIT</i></button>
              </div>
            </section>
            <main>
              <h2 style= {{margin:"10px 0"}}>
                {results.length ? "Your results:" : "Search for a topic to get the top 10 results!"}
              </h2>
              {results.map((article, i) => {
                return (
                  <div className="article-box" key={i}>
                      <section className="article-content">
                          <h4 className="article-title"><a href={article.url}>{article.title}</a></h4>
                          <p className="article-source">{article.publishedAt.substring(0, 10)}</p>
                          <p className="article-text">{article.description}</p>
                      </section>
                      <div className="article-image" style={{backgroundImage:"url(" + article.image + ")"}} onClick={() => handleSaveArticle(article.id)}>
                        <div className="article-save">{savedNews?.some((savedArticleId) => savedArticleId === article.id)
                        ? 'Saved ✓'
                        : 'Save'}</div>
                      </div>
                  </div>
                )
              })}
            </main>
        </div>
    );
};

export default Main;