import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

console.log(BASEURL, APIKEY)


async function search () {
    // console.log(query)
    // let responseJson = await axios.get(`${BASEURL}${query}${APIKEY}`, 
    fetch('https://gnews.io/api/v4/search?q=example&token=7f1fd78c002cebd14e04533b292de6bb')
    // fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=5f2820da9b6340da87e0692275c16702')
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}


export { search }
