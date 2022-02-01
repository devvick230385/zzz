import React from "react";
import dumm from "../assets/Images/IMG-20220125-WA0003.jpg";
import logo from "../assets/Images/logo.png";
function Header() {
  return (
    <div className="container pt-2 ">
      <div className="d-flex justify-content-between align-items-center ">
        <div className="">
          <img
            src={logo}
            style={{ objectFit: "contain" }}
            width={200}
            height={50}
            alt=""
          />

          {/* <h4 className="cursive pl-2 text-light">FOOK-LABS</h4> */}
        </div>
        <div className="d-flex align-items-center">
          <div className=" mr-2 ">
            <div className="text-light line pr-3">
              Mainnet <br />
              <small>Network</small>
            </div>
          </div>
          <div className="d-flex align-items-center ml-2">
            <div className="">
              <img src={dumm} width={20} height={20} alt="" />
            </div>
            <div className="text-light pl-2 ">
              Mainnet <br />
              <small>Network</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
