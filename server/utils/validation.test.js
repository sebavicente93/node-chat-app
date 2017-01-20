const expect= require('expect');

const {isRealString}= require('./validation');

describe('isRealString', () => {

  it('Should reject non-string values',() =>{
    var res= isRealString(92);

    expect(res).toBe(false);
  });

  it('Should reject string with only spaces',() => {
    var res= isRealString('     ');
    expect(res).toBe(false);
  });

  it('Should allow string with non-spaces values', () => {
    var res= isRealString('Hi! This is a String   ');

    expect(res).toBe(true);
  });
});
