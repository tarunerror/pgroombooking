import React from 'react';
import './Header.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginPage from './login';

const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">
          <h1>ROOMIE</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/Login">Login</Link> 
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
