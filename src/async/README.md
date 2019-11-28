# Async Actions
Async actions the similar other actions in redux. Like other redux actions, dispatching them triggers a state change. Unlike most redux actions, async actions dispatch other actions. For example, when a network request is complete, the async action may dispatch another action to update the redux state/store. It may also dispatch another action add data to the redux state/store. Here is a breakdown of our simple async action.

> Axios is a  library for making async requests. It allows us to perform requests easily.

```
import axios from 'axios';
```

> Import the action we want to dispatch from the apiQuote duck.

```
import { setQuote } from '../ducks/apiQuoteDuck';
```

> This is the async action. Thunk middleware allows us to use **dispatch** in the action. Dispatching other actions during network calls is the essence of async.

```
export function apiQuote(){
  return dispatch => axios.get('http://quotes.stormconsultancy.co.uk/random.json')
  .then(res => dispatch(setQuote(res.data.quote)))
  .then(res => console.log(res, dispatch))
  .catch( err => console.log(err))
}
```
