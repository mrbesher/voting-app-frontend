import moment from 'moment';
let users = [
  {email: 'admin@example.com', id: 3234, is_active: true, elections: []},
  {email: 'user@example.com', id: 3235, is_active: true, elections: []},
  {
    email: 'besher@example.com',
    id: 3236,
    is_active: true,
    elections: [12],
  },
  {email: 'emre@example.com', id: 3237, is_active: true, elections: []},
  {
    email: 'aliemre@example.com',
    id: 3238,
    is_active: true,
    elections: [13, 12],
  },
  {email: 'yanki@example.com', id: 3239, is_active: true, elections: []},
  {email: 'cagtay@example.com', id: 3240, is_active: true, elections: []},
  {
    email: 'utkan@example.com',
    id: 3241,
    is_active: true,
    elections: [12],
  },
];

let elections = [
  {
    title: 'What should we teach in Electronic Circuits?',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 12,
    owner_id: 3234,
    created_date: new Date(2021, 4, 5),
    time_in_days: 40,
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
    ballots: [
      {
        candidate_id: 0,
        id: 0,
        owner_id: 3238,
      },
      {
        candidate_id: 0,
        id: 1,
        owner_id: 3241,
      },
      {
        candidate_id: 0,
        id: 2,
        owner_id: 3236,
      },
    ],
  },
  {
    title: 'Elect the new dean!',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 13,
    owner_id: 3234,
    created_date: new Date(2021, 4, 20),
    time_in_days: 8,
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
    ballots: [
      {
        candidate_id: 0,
        id: 0,
        owner_id: 3238,
      },
    ],
  },
  {
    title: 'What should we call our new club?',
    description:
      'This is an example election. Here I offer a long description borrowed from Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    id: 15,
    owner_id: 3234,
    created_date: new Date(2021, 4, 28),
    time_in_days: 30,
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
    ballots: [],
  },
];

const fakeStorage = {
  fetchProjects: () => {
    let filteredElections = elections.filter(
      election =>
        moment().diff(election['created_date'].toString(), 'days') <
        election['time_in_days'],
    );
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        filteredElections
          ? resolve(filteredElections)
          : reject({code: 'No Projects Found'});
      }, 500);
    });
  },
  fetchFinishedProjects: () => {
    let filteredElections = elections.filter(
      election =>
        moment().diff(election['created_date'].toString(), 'days') >=
        election['time_in_days'],
    );
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        filteredElections
          ? resolve(filteredElections)
          : reject({code: 'No Projects Found'});
      }, 500);
    });
  },
  fetchUserProjects: userId => {
    const search = idToSearch => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == idToSearch) {
          return users[i];
        }
      }
      return null;
    };
    let user = search(userId);
    let userElections = [];
    user.elections.forEach((item, _) => {
      userElections.push(elections.find(x => x.id === item));
    });
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        userElections.length > 0
          ? resolve(userElections)
          : reject({code: 'No Projects Found'});
      }, 700);
    });
  },
  fetchProject: projectId => {
    const search = idToSearch => {
      for (let i = 0; i < elections.length; i++) {
        if (elections[i].id == idToSearch) {
          return elections[i];
        }
      }
      return null;
    };
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let election = search(projectId);
        election ? resolve(election) : reject({code: 'No Projects Found'});
      }, 300);
    });
  },
  didUserVote: (userId, electionId) => {
    const search = idToSearch => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == idToSearch) {
          return users[i];
        }
      }
      return null;
    };
    let user = search(userId);
    return user['elections'].includes(electionId);
  },
  getWinner: electionId => {
    const search = (list, idToSearch) => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == idToSearch) {
          return list[i];
        }
      }
      return null;
    };
    let election = search(elections, electionId);
    if (!election) {
      return 'NO ONE';
    }
    let sortedOptions = {};
    election['ballots'].forEach((item, _) => {
      if (!(item['id'] in sortedOptions)) {
        sortedOptions[item['id']] = 1;
      } else {
        sortedOptions[item['id']]++;
      }
    });
    let candidateId = Object.keys(sortedOptions).reduce((a, b) =>
      sortedOptions[a] > sortedOptions[b] ? a : b,
    );
    let candidate = search(election['candidates'], candidateId);
    return candidate['info'];
  },
  addBallot: (electionId, candidateId) => {
    for (let i = 0; i < elections.length; i++) {
      if (elections[i].id == electionId) {
        elections[i]['ballots'].push({
          candidate_id: candidateId,
          id: elections[i]['ballots'].length,
          owner_id: global.loggedIn,
        });
        for (let j = 0; j < users.length; j++) {
          if (users[j].id == global.loggedIn) {
            users[j]['elections'].push(electionId);
          }
        }
      }
    }
  },
};

export {users, elections, fakeStorage};
