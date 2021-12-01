import * as React from "react";
import { NavLink } from "react-router-dom";

const NonMatch: React.FC<NonMatchProps> = (props) => {
  return (
    <main className="container-fluid">
      <div
        className="row h-100 justify-content-center"
        style={{
          backgroundImage: `url("../photos/bg-compare.jpeg")`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      >
        <div className="m-5 ">
            <div className="row bg-danger justify-content-center p-5 mx-5">
              <div className="col-lg-4">
              <h2 className="text-center">It's a Not a Match!</h2>
              <p className="conflict-reason">Because Product 1 contains <strong>lectus magna </strong> & Product 2 contains <strong>fringilla urna </strong> this products are noncompatible. Metus aliquam eleifend mi in nulla posuere sollicitudin. Semper eget duis at tellus at urna condimentum mattis.</p>

              </div>
            </div>
          <div className="row justify-content-center align-items-center bg-primary  bg-opacity-75 mx-5 h-75">
            <div className="col-lg-2 m-5">
              <div className="card card-nonmatch">
                <img
                  className="card-img-top"
                  src="../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    {" "}
                    Product Name <br></br> <strong> Brand Name</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="text-center ampersand text-white">&</div>
            </div>
            <div className="col-lg-2 m-5">
              <div className="card card-nonmatch">
                <img
                  className="card-img-top card-style"
                  src="../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    {" "}
                    Product Name <br></br> <strong> Brand Name</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-2">
                <button className="btn btn-info compare-btn shadow-md">
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

interface NonMatchProps {}

export default NonMatch;
