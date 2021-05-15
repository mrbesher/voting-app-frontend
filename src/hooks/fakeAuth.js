import {users} from '../fakeStorage';

const search = (emailKey, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].email === emailKey) {
      return myArray[i];
    }
  }
  return null;
};

const fakeAuth = {
  signin: (email, password) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let user = search(email, users);
        user ? resolve(user) : reject({code: "Can't login"});
      }, 1000);
    });
  },
};

export {fakeAuth};
