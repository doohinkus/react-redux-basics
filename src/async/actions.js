import axios from 'axios';
import { setMessage } from '../ducks/localQuoteDuck';

export function apiQuote(){
  return dispatch => axios.get('http://quotes.stormconsultancy.co.uk/random.json')
  .then(res => dispatch(setMessage(res.data.quote)))
  .then(res => console.log(res, dispatch))
  .catch( err => console.log(err))
}