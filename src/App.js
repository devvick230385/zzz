import React from "react";

import "./App.css";
import "./assets/icons/css/simple-line-icons.css";
import "./assets/icons/fonts/Simple-Line-Icons.eot";
import "./assets/icons/fonts/Simple-Line-Icons.svg";
import "./assets/icons/fonts/Simple-Line-Icons.ttf";
import "./assets/icons/fonts/Simple-Line-Icons.woff";
import "./assets/icons/fonts/Simple-Line-Icons.woff2";
import Container from "./components/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <h1>hello world</h1> */}
      <Container />
    </Router>
  );
}

export default App;
