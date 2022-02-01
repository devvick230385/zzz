import React from "react";
import Main from "./Main";
import Tabs from "./Tabs";

function Body() {
  return (
    <div className="shadow bg-white container bodyBox mt-4">
      <Tabs />
      <hr />
      <div className="yoo">
        <Main />
      </div>
    </div>
  );
}

export default Body;
