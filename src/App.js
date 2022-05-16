import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Currency from "./routes/Currency";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
