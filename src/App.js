import React from "react";
import Homescreen from "./Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginscreen from "./Components/Loginscreen";

function App() {
  const user = null;

  return (
    <div className='App'>
      {/* <h1>Lets Build Netflix!! Yayyy!!</h1> */}
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route exact path='/' element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
