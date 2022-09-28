import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/users').then(response => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="card w-96 bg-neutral text-primary-content">
      <div className="card-body">
        <h2 className="card-title">User Names</h2>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.userName}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-fu">Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
