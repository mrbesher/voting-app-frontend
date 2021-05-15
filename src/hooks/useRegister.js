import {useState} from 'react';

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function register(email, password, name, surname) {
    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResponse(1);
    }, 1500);
  }

  return {loading, error, response, register};
}
