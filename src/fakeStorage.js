const users = [
  {email: 'admin@example.com', id: 3234, is_active: true, elections: []},
  {email: 'user@example.com', id: 3235, is_active: true, elections: []},
  {
    email: 'besher@example.com',
    id: 3236,
    is_active: true,
    elections: [
      {
        title: 'What should we teach in Electronic Circuits?',
        description:
          'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 12,
        owner_id: 3234,
        created_date: new Date(2021, 5, 5),
        candidates: [
          {
            info: 'Nothing',
            id: 0,
            election_id: 12,
          },
          {
            info: 'Only Transistors',
            id: 1,
            election_id: 12,
          },
          {
            info: 'Microcontrollers, the universe, and beyond',
            id: 2,
            election_id: 12,
          },
          {
            info: 'Remove this course. It is useless.',
            id: 3,
            election_id: 12,
          },
        ],
      },
    ],
  },
  {email: 'emre@example.com', id: 3237, is_active: true, elections: []},
  {
    email: 'aliemre@example.com',
    id: 3238,
    is_active: true,
    elections: [
      {
        title: 'Elect the new dean',
        description:
          'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 13,
        owner_id: 3234,
        created_date: new Date(2021, 5, 5),
        candidates: [
          {
            info: 'John Doe',
            id: 0,
            election_id: 13,
          },
          {
            info: 'Jane Doe',
            id: 1,
            election_id: 13,
          },
          {
            info: 'Tim Smith',
            id: 2,
            election_id: 13,
          },
          {
            info: 'Muhammed Yilmaz',
            id: 3,
            election_id: 13,
          },
        ],
      },
    ],
  },
  {email: 'yanki@example.com', id: 3239, is_active: true, elections: []},
  {email: 'cagtay@example.com', id: 3240, is_active: true, elections: []},
  {
    email: 'utkan@example.com',
    id: 3241,
    is_active: true,
    elections: [
      {
        title: 'What should we teach in Electronic Circuits?',
        description:
          'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 12,
        owner_id: 3234,
        created_date: new Date(2021, 5, 5),
        candidates: [
          {
            info: 'Nothing',
            id: 0,
            election_id: 12,
          },
          {
            info: 'Only Transistors',
            id: 1,
            election_id: 12,
          },
          {
            info: 'Microcontrollers, the universe, and beyond',
            id: 2,
            election_id: 12,
          },
          {
            info: 'Remove this course. It is useless.',
            id: 3,
            election_id: 12,
          },
        ],
      },
    ],
  },
];

const elections = [
  {
    title: 'What should we teach in Electronic Circuits?',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 12,
    owner_id: 3234,
    created_date: new Date(2021, 5, 5),
    candidates: [
      {
        info: 'Nothing',
        id: 0,
        election_id: 12,
      },
      {
        info: 'Only Transistors',
        id: 1,
        election_id: 12,
      },
      {
        info: 'Microcontrollers, the universe, and beyond',
        id: 2,
        election_id: 12,
      },
      {
        info: 'Remove this course. It is useless.',
        id: 3,
        election_id: 12,
      },
    ],
  },
  {
    title: 'Elect the new dean!',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 13,
    owner_id: 3234,
    created_date: new Date(2021, 5, 5),
    candidates: [
      {
        info: 'John Doe',
        id: 0,
        election_id: 13,
      },
      {
        info: 'Jane Doe',
        id: 1,
        election_id: 13,
      },
      {
        info: 'Tim Smith',
        id: 2,
        election_id: 13,
      },
      {
        info: 'Muhammed Yilmaz',
        id: 3,
        election_id: 13,
      },
    ],
  },
  {
    title: 'What should we call our new club?',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 15,
    owner_id: 3234,
    created_date: new Date(2021, 5, 5),
    candidates: [
      {
        info: 'The Club',
        id: 0,
        election_id: 15,
      },
      {
        info: 'CS Club',
        id: 1,
        election_id: 15,
      },
      {
        info: 'Boring Club',
        id: 2,
        election_id: 15,
      },
      {
        info: 'Nerdy Students Club',
        id: 3,
        election_id: 15,
      },
    ],
  },
];

const fakeStorage = {
  fetchProjects: () => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        elections ? resolve(elections) : reject({code: 'No Projects Found'});
      }, 1000);
    });
  },
  fetchUserProjects: userId => {
    const search = idToSearch => {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == idToSearch) {
          return users[i];
        }
      }
      return null;
    };
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let user = search(userId);
        user ? resolve(user.elections) : reject({code: 'No Projects Found'});
      }, 1000);
    });
  },
};

export {users, elections, fakeStorage};
