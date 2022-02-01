import React from "react";
import Img from "../assets/Images/IMG-20220125-WA0003.jpg";
import Index from "../routes/Index";

function Main() {
  return (
    <div className="row" style={{ background: "grey" }}>
      <div className=" col-md-8 ">
        <Index />
      </div>
      <div className="  col-md-4 bg-white">
        <div className="pl-3 pr-3">
          <img
            src={Img}
            alt=""
            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
          />
          <h6>Something</h6>
          <div>
            some <br />
            <small>ss</small>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-flex">
              <div className="mr-3">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm btn-rounded"
                >
                  sell
                </button>
              </div>
              <div className="mr-3">
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-rounded"
                >
                  sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
