import React from "react";
import Body from "./Body";
import Header from "./Header";
import "./styles/styles.css";

function Container() {
  return (
    <div className="contain">
      <Header />
      <Body />
    </div>
  );
}

export default Container;
