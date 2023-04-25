import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainSpace from './components/mainSpace';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Profile from './components/profile';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/' element={<MainSpace />} />
    </Routes>
  );
};

export default App;
