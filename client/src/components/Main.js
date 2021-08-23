import '../App.css';
// import search from '../utils/API'
import { useLazyQuery } from '@apollo/client';
import { GET_ARTICLE } from '../utils/queries';
import React, { useState } from 'react';

function Main(props) {

    const [getArticle, { data }] = useLazyQuery(GET_ARTICLE);

    const [searchState, setSearchState] = useState('');

    const onSearch = async () => {
        console.log(searchState);
        //let result = await search(searchState);
        //await console.log(result);
        
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