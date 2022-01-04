import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navigation, Home, About, Final, Assignments, Weeks, WeekOne } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/final" element={<Final />} />
          <Route path="/assignments" element={<Assignments />}>
              <Route path="" element={<Weeks />} />
              <Route path=":weeksSlug" element={<WeekOne />} />
          </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
