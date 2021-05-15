import {useState} from 'react';
import {fakeAuth} from './fakeAuth';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function login(email, password) {
    setError(null);
    setLoading(true);
    fakeAuth
      .signin(email, password)
      .then(serverResponse => {
        setLoading(false);
        global.loggedIn = serverResponse.id;
        setResponse(serverResponse);
      })
      .catch(serverError => {
        setLoading(false);
        setError(serverError);
      });
  }

  return {loading, error, response, login};
}
