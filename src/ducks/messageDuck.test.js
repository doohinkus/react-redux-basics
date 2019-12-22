import { SET_MESSAGE, setMessage} from './messageDuck';

describe('actions', () => {
  it('should create a setMessage action to set a message', () => {
    const message = "Testing the cow!"
    const expectedAction = {
      type: SET_MESSAGE,
      payload: message
    }
    expect(setMessage(message)).toEqual(expectedAction);
  })
})