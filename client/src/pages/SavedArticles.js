
import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';

import { REMOVE_ARTICLE } from '../utils/mutations';
import { removeNewsId } from '../utils/localStorage';

const SavedNews = () => {
    const { loading, data } = useQuery(GET_ME);
    const [deleteArticle] = useMutation(REMOVE_ARTICLE);
    const userData = data?.me || {};

    if(!userData?.username) {
        return(
            <h4>
               You need to be logged in to see this page. Use the navigation links above to sign up or log in! 
            </h4>
        );
    }

    const handleDeleteArticle = async (newsId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            return false;
        }

        try {
            await deleteArticle({
                variables: {newsId: newsId},
                update: cache => {
                  const data = cache.readQuery({ query: GET_ME });
                  const userDataCache = data.me;
                  const SavedNewsCache = userDataCache.SavedNews;
                  const updatedNewsCache = SavedNewsCache.filter((news) => news.newsId !== newsId);
                  data.me.SavedNews = updatedNewsCache;
                  cache.writeQuery({query: GET_ME , data: {data: {...data.me.SavedNews }}})
                }
            });

            removeNewsId(newsId);
        } catch (err) {
            console.error(err);
        }
    };

    if(loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Viewing saved news!</h1>
          </Container>
        </Jumbotron>
        <Container>
          <h2>
            {userData.SavedNews.length
              ? `Viewing ${userData.SavedNews.length} saved ${userData.SavedNews.length === 1 ? 'news' : 'news'}:`
              : 'You have no saved news!'}
          </h2>
          <CardColumns>
            {userData.SavedNews.map((news) => {
              return (
                <Card key={news.newsId} border='dark'>
                  {news.image ? <Card.Img src={news.image} alt={`The cover for ${news.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <p className='small'>Authors: {news.authors}</p>
                    {news.link ? <Card.Text><a href={news.link} target="_blank" rel="noreferrer">More Information on Google news</a></Card.Text> : null}
                    <Card.Text>{news.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteArticle(news.newsId)}>
                      Delete this news
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </> 
    );
};

export default SavedNews;