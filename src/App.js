import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Navigation, Home, About, Final, Assignments, Weeks, WeekOne, Footer, } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/final" element={<Final />} />
          <Route path="/assignments" element={<Assignments />}>
              <Route path="" element={<Weeks />} />
              <Route path=":weeksSlug" element={<WeekOne />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
