

const validatorMiddleware = require('../src/middleware/validator');

describe('Validator Middleware', () => {

let consoleSpy;
let req = {query:{name:'rami'}}; 
let res = {}; 
let next = jest.fn();


beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });


  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('haveing a name in query', () => {
    validatorMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });



  test('check if the name correct', () => {
    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

})