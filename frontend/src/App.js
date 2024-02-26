import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';
import CreateUserForm from './components/CreateUserForm';
import CreateHouseForm from './components/CreateHouseForm';
import UserShow from './components/UserShow';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
