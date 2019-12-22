import * as duck from './localQuoteDuck';




describe('actions', () => {
  it('should create a getLocalQuote action to get a quote', () => {
    const expectedAction = {
      type: duck.GET_LOCAL_QUOTE
    }
    expect(duck.getLocalQuote()).toEqual(expectedAction);
  });
  it('should create a setQuote action to set a quote', () =>{
    const message = "Testing the cow!"
    const expectedAction = {
      type: duck.SET_QUOTE,
      payload: message
    }
    expect(duck.setQuote(message)).toEqual(expectedAction);
  })

})

describe('random array function', () => {
  // forces Math.random to return 0
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0;
  global.Math = mockMath;

  it('should grab a random/zeroeth element from an array', () => {
    const array = ["hi", "test works", "no"];
    const result = duck.getRandomElementFromArray(array);
    // console.log(duck.getRandomElementFromArray(["asdf","afs"]))
    expect(result).toEqual(array[0])
  })
})