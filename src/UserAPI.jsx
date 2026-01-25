import React, { useState, useEffect } from 'react';

function UserAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);

      // ES6+ Table Log for Arrays/Objects
      console.log("API Data Fetched Successfully:");
      console.table(data); 
    }
    fetchUsers();
  }, []);

  return (
    <div className="section">
      <h3>User API Data</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserAPI;