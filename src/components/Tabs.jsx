import React from "react";
import { Link } from "react-router-dom";
import { GiAngryEyes } from "react-icons/gi";

function Tabs() {
  return (
    <div className="container pt-3 bg-white">
      <div className="d-flex justify-content-between">
        <Link to="/" className="links text-dark">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Background</small>
          </div>
        </Link>
        <Link to="/body" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Body</small>
          </div>
        </Link>
        <Link to="/eyes" className="links text-secondary">
          <div className="tab">
            <GiAngryEyes size="" />
            <small>Eyes</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Eyebrows</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Mouth</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Nose</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Clothes</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Accessories</small>
          </div>
        </Link>
        <Link to="/" className="links text-secondary">
          <div className="tab">
            <i className="icon-user"></i>
            <small>Weapons</small>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
