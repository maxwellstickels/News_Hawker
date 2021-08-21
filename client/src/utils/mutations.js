import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const SAVE_ARTICLE = gql`
// mutation saveArticle() {
//   saveArticle() {

//   }
// }
// `;

// export const REMOVE_ARTICLE = gql`
// mutation removeArticle() {
//   removeArticle() {

//   }
// }
// `;

// {
//         "title": "Mauro: Dabove no Bahia faz com que técnicos acomodados tenham que se mexer",
//         "description": "Mauro Cezar classificou como \"interessante\" a escolha do Bahia pelo técnico argentino Diego Dabove, ex-San L",
//         "content": "Mauro Cezar classificou como \"interessante\" a escolha do Bahia pelo técnico argentino Diego Dabove, ex-San Lorenzo, que chega para substituir Dado Cavalcanti. No quadro \"Fala, Maurão\", o colunista do UOL Esporte elogia o novo treinador e não crê em m... [1263 chars]",
//         "url": "https://www.uol.com.br/esporte/futebol/ultimas-noticias/2021/08/21/mauro-dabove-no-bahia-faz-com-que-tecnicos-acomodados-tenham-que-se-mexer.htm",
//         "image": "https://conteudo.imguol.com.br/c/esporte/de/2021/08/18/diego-dabove-e-o-novo-treinador-do-bahia-1629330454459_v2_615x300.jpg",
//         "publishedAt": "2021-08-21T03:00:00Z"

//       }
