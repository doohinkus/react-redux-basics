import * as duck from './characterDuck';




describe('actions', () => {
  it('should create a moveSprite action to move sprite', () => {
    const position = { x: 10, y: 20 };
    const expectedAction = {
      type: duck.MOVE_SPRITE,
      payload: position
    }
    expect(duck.moveSprite(position)).toEqual(expectedAction);
  });
});
