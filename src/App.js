import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login.js";
import SignUp from "./Pages/SignUp.js";


function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
       </Router>
    </div>

  //   <Router>
  //   <Routes>
  //     {/* 라우팅 표 */}
  //     <Route path="/" element={<Login />} />
  //     <Route path="/signup" element={<SignUp />} />
  //     {/* <Route path="/" element={<HomePage />} /> */}
  //   </Routes>
  // </Router>
  );
}

export default App;
