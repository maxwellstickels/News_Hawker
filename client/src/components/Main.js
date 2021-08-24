import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GET_ARTICLE } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';


function Main(props) {
    var results = [];
    const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);
    if (data) {
      results = data.getArticle;
    }
    const [searchState, setSearchState] = useState('');

    const onSearch = async () => {
        // console.log(searchState);
        // let result = await search(searchState);
        // await console.log(result);
        
        getArticle({variables: {search:searchState}});
        
    }

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
              {results.map((article, i) => {
                return (
                  <div className="article-box" key={i}>
                      <section className="article-content">
                          <h4 className="article-title"><a href={article.url}>{article.title}</a></h4>
                          <p className="article-source">{article.publishedAt.substring(0, 10)}</p>
                          <p className="article-text">{article.description}</p>
                      </section>
                      <div className="article-image" style={{backgroundImage:"url(" + article.image + ")"}}>
                        <div className="article-save">Save</div>
                      </div>
                  </div>
                )
              })}
                {/*
                  <div className="article-box">
                    <section className="article-content">
                        <h4 className="article-title">Article Title</h4>
                        <p className="article-source">Article Source</p>
                        <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                    </section>
                    <img className="article-image" src="https://via.placeholder.com/120x478" alt=""/>
                </div>
                <div className="article-box">
                    <section className="article-content">
                        <h4 className="article-title saved">Article Title</h4>
                        <p className="article-source">Article Source</p>
                        <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                    </section>
                    <img className="article-image" src="https://via.placeholder.com/200x340" alt=""/>
                </div>
                */}
            </main>
        </div>
    );
};

export default Main;

/*
{searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
*/