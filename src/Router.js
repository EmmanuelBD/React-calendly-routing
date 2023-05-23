import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ServiceDetails from './components/ServiceDetails';
import Teams from './components/Teams';
import Enterprise from './components/Enterprise';
import Individuals from './components/Individuals';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/individuals">Individuals</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/enterprise">Enterprise</Link>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;


