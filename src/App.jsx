import React, { useState } from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h1>Lab Activity 3</h1>

      <div className="subtitle-wrapper">
        <p className="subtitle">
          {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
        </p>

        <button
          className="login-btn"
          onClick={() => setIsLoggedIn(prev => !prev)}
        >
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>

      <UserList users={users} />
      <Counter />
      <UserAPI />
    </div>
  );
}

export default App;
