const expect= require('expect');

const {generateMessage}= require('./message');

describe('generateMessage',() => {

  it('Should generate the correct message object',() => {

    var from= 'This is from';
    var text= 'This is text';
    var message= generateMessage(from,text);

    expect(message).toInclude({from,text});
    expect(message.createdAt).toBeA('number');

  });
});
