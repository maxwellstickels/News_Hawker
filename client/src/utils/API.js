import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

console.log(BASEURL, APIKEY)


async function search (query) {
    console.log(query)
    let response = await axios.get(`${BASEURL}/?q=${query}${APIKEY}`, 
    {headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        withCredentials: true,
    }}
    )

    let responseJSON = await response.json();

    console.log(responseJSON)
}

export default search;
