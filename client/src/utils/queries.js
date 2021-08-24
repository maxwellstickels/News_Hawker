import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getUser($_id: String) {
    me(_id: $_id) {
      _id
      username
      email
      password
      savedArticles {
        source
        authors
        title
        description
        url
        image
        publishedAt
        content
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($search: String!) {
    getArticle(search: $search) {
      title
      description
      content
      url
      image
      publishedAt
      authors
    }
  }
`;

export const GET_SAVED_ARTICLES = gql`
  query getSavedArticles($_id: ID!) {
    getSavedArticles(_id: $_id) {
      title
      description
      content
      url
      image
      publishedAt
      authors
    }
  }
`;
//{ "title": "‘Jessica Jones’ Among Properties That Could “Perhaps Someday” Return To TV, Says Kevin Feige", "description": "Marvel Studios has a slew of television series in the works at Disney+ following the launch of WandaVision. The Falcon and the Winter Solider is coming in March with other titles including Loki, Ms. Marvel, Hawkeye, Moon Knight and She-Hulk.", "content": "Marvel Studios has a slew of television series in the works at Disney+ following the launch of WandaVision.\nThe Falcon and the Winter Solider is coming in March with other titles including Loki, Ms. Marvel, Hawkeye, Moon Knight and She-Hulk.\nBut Kevi...", "url": "https://deadline.com/2021/02/jessica-jones-perhaps-someday-return-to-tv-kevin-feige-1234700113/", "image": "https://deadline.com/wp-content/uploads/2021/02/VIOLET_303_Unit_00757R.jpg?w=1024", "publishedAt": "2021-02-24T19:00:00Z"}
