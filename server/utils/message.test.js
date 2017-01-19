const expect= require('expect');

const {generateMessage,generateLocationMessage}= require('./message');

describe('generateMessage',() => {

  it('Should generate the correct message object',() => {

    var from= 'This is from';
    var text= 'This is text';
    var message= generateMessage(from,text);

    expect(message).toInclude({from,text});
    expect(message.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage',() => {

  it('Should generate correct location object', () => {
    var from='author';
    var lat= 1;
    var lng= 2;
    var url='https://www.google.com/maps?q=1,2';
    var locationMessage= generateLocationMessage(from,lat,lng);

    expect(locationMessage).toInclude({from,url});
    expect(locationMessage.createdAt).toBeA('number');
  });
});
