import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
};

export default App;