import '../App.css';
import React from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_ARTICLE } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeNewsId } from '../utils/localStorage';


function SavedArticles(props) {

  const { loading, data } = useLazyQuery(GET_ME);
  const [deleteArticle] = useMutation(REMOVE_ARTICLE);
  const userData = data?.me || {};

  if(!userData?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
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
        <main>
            <div className="article-box">
                <section className="article-content">
                    <h4 className="article-title">Article Title</h4>
                    <p className="article-source">Article Source</p>
                    <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                </section>
                <div className="article-image" style={{backgroundImage:"url(https://via.placeholder.com/120x478)"}}>
                        <div className="article-save">Save</div>
                </div>
            </div>
            <div className="article-box">
                <section className="article-content">
                    <h4 className="article-title saved">Article Title</h4>
                    <p className="article-source">Article Source</p>
                    <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                </section>
                <div className="article-image" style={{backgroundImage:"url(https://via.placeholder.com/200x340)"}}>
                        <div className="article-save">Save</div>
                </div>
            </div>
        </main>
    );
};

export default SavedArticles;