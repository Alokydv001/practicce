import React, { useState } from 'react';

const LoginForm = () => {
  const correctUsername = 'user123';
  const correctPassword = 'pass123';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Login Form</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <h2>Welcome, {correctUsername}!</h2>
      )}
    </div>
  );
};

export default LoginForm;
