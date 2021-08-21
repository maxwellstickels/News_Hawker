import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

console.log(BASEURL, APIKEY)


async function search (query) {
    console.log(query)
    let responseJson = await axios.get(`${BASEURL}/?q=${query}${APIKEY}`, 
    {headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        withCredentials: true,
    }}
    )

    let response = await responseJson.json();

    console.log(response)
}

export { search }
