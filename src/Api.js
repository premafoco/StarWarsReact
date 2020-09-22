import axios from 'axios';


const Api= axios.create({

baseURL: 'http://api.tvmaze.com/search/shows?q=star%20wars'

});
export default Api;

