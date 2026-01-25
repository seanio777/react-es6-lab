import React from 'react';

function UserList({ users }) {
  return (
    <div className="section">
      <h3>User List Component</h3>
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
