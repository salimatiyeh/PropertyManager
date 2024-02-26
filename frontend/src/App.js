import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import './App.css';
import CreateUserForm from './components/CreateUserForm';
import CreateHouseForm from './components/CreateHouseForm';
import UserShow from './components/UserShow';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users/new">Create User</Link>
            </li>
            <li>
              <Link to="/houses/new">Create House</Link>
            </li>
            <li>
              <Link to="/users/:id">User profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/houses/new" element={<CreateHouseForm />} />
          <Route path="/users/new" element={<CreateUserForm />} />
          <Route path="/users/:id" element={<UserShow />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
