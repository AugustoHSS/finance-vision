import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import GlobalStyles from './GlobalStyles';

function App() {


  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;