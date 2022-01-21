import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navigation, Home, Final, Projects, Weeks, WeekTwo, WeekOne } from './components';
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
          <Route path="/final" element={<Final />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="" element={<Weeks />} />
            <Route path="/projects/weekone" element={<WeekOne />} />
            <Route path="/projects/weektwo" element={<WeekTwo />} />
            {/* 
            <Route path="/projects/weekthree" element={<WeekThree />} />
            <Route path="/projects/weekfour" element={<WeekFour />} />
            <Route path="/projects/weekfive" element={<WeekFive />} />
            <Route path="/projects/weeksix" element={<WeekSix />} />
            <Route path="/projects/weekseven" element={<WeekSeven />} />
            <Route path="/projects/weekeight" element={<WeekEight />} />
            <Route path="/projects/weeknine" element={<WeekNine />} />
            <Route path="/projects/weekten" element={<WeekTen />} />
            <Route path="/projects/weekeleven" element={<WeekEleven />} />
            <Route path="/projects/weektwelve" element={<WeekTwelve />} />
            <Route path="/projects/weekthirteen" element={<WeekThirteen />} />
            */}  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
