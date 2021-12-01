import * as React from "react";
import { NavLink } from "react-router-dom";

const Match: React.FC<MatchProps> = (props) => {
  return (
    <main className="container-fluid">
      <div
        className="h-100 justify-content-center bg-img"
        style={{
          backgroundImage: `url("../photos/bg-compare.jpeg")`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      >
        <div className="p-5">
            <div className="row bg-success p-5 mx-5">
              <h2 className="text-center">It's a Match!</h2>
            </div>
          <div className="row justify-content-center align-items-center bg-primary  bg-opacity-75 mx-5 h-75">
            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card card-match shadow">
                <img
                  className="card-img-top card-style"
                  src="../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg"
                  alt="Card image cap"
                />
                <div className="card-body p-3">
                  <p className="card-text">
                    {" "}
                    Product Name <br></br> <strong> Brand Name</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-1 m-5 justify-content-center">
              <div className="text-center ampersand text-white">&</div>
            </div>
            <div className=" d-flex col-lg-3 justify-content-center">
              <div className="card card-match shadow">
                <img
                  className="card-img-top card-style"
                  src="../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg"
                  alt="Card image cap"
                />
                <div className="card-body p-3">
                  <p className="card-text">
                    {" "}
                    Product Name <br></br> <strong> Brand Name</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-2 d-flex justify-content-center  ">
                <button className="btn btn-info compare-btn shadow">
                  Compare More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface MatchProps {}

export default Match;
