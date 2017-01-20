const expect= require('expect');
const {Users}= require('./users');

describe('Users',() =>{
  var users;

  beforeEach(() => {
    users= new Users();
    users.users= [{
      id:'1',
      name:'Seba',
      room:'NodeCourse'
    },{
      id:'2',
      name:'Jen',
      room:'TestRoom'
    },{
      id:'3',
      name:'Cacho',
      room:'NodeCourse'
    }]
  });

  it('Should add new user',() => {
    var users= new Users();
    var user= {
      id:123,
      name: 'Seba',
      room: 'TestRoom'
    };
    var res= users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should remove a user',() => {
    var userId='1';
    var user= users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user',() => {
    var userId='99';
    var user= users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user',() => {
    var userId= '2';
    var user= users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('Should not find user',() => {
    var userId= '99';
    var user= users.getUser(userId);

    expect(user).toNotExist();
  });

  it('Should return names for NodeCourse',() => {
    var userList= users.getUserList('NodeCourse');

    expect(userList).toEqual(['Seba','Cacho']);
  });

  it('Should return names for TestRoom',() => {
    var userList= users.getUserList('TestRoom');

    expect(userList).toEqual(['Jen']);
  });
});
