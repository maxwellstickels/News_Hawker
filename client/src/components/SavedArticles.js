import '../App.css';
import React from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_ARTICLE } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeNewsId } from '../utils/localStorage';


function SavedArticles(props) {
  var results = [];
  const { loading, data } = useLazyQuery(GET_ME);
  const [deleteArticle] = useMutation(REMOVE_ARTICLE);
  const userData = data?.me || {};

  if(!userData?.username) {
    return (
        <div className="article-box">
            <section className="article-content">
                <h4 style={{ color: 'white', fontSize: 25 , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    You need to be logged in to see this page. Use the navigation links above to sign up or log in!
                </h4>            
            </section>            
        </div>
    );
  }

  const handleDeleteArticle = async (newsId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
          return false;
      }

      try {
          await deleteArticle({
              variables : {newsId: newsId},
              update: cache => {
                const data = cache.readQuery({ query: GET_ME });  
                const userDataCache = data.me;
                const savedArticleCache = userDataCache.savedArticles;
                const updatedArticleCache = savedArticleCache.filter((news) => news.newsId !== newsId);
                data.me.savedArticles = updatedArticleCache;
                cache.writeQuery({ query: GET_ME , data : {data: {...data.me.savedArticles}}})
              }
          });

          removeNewsId(newsId);
      } catch (err) {
          console.error(err);
      }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

    return (
    <div>
            
        <button id="topic-submit" onClick={handleDeleteArticle}></button>

        <main>
        {results.map((article, i) => {
            return (
                <div className="article-box" key={i}>
                    <section className="article-content">
                        <h4 className="article-title">{article.title}</h4>
                            <p className="article-source">{article.publishedAt.substring(0, 10)}</p>
                            <p className="article-text">{article.description}</p>
                    </section>
                        <img className="article-image" src={article.image} alt=""/>
                </div>
            )
            })}
        </main>
    </div>
    );
};

export default SavedArticles;