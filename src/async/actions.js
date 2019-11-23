import axios from 'axios';
import { setQuote } from '../ducks/apiQuoteDuck';

export function apiQuote(){
  return dispatch => axios.get('http://quotes.stormconsultancy.co.uk/random.json')
  .then(res => dispatch(setQuote(res.data.quote)))
  .then(res => console.log(res, dispatch))
  .catch( err => console.log(err))
}