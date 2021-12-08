import * as React from "react";
import { useEffect, useState } from "react";

const NonMatch: React.FC<NonMatchProps> = ({product1, product2, conflict}) => {


  const compareMore = () => {
    window.location.reload();
  }

  const [photo1, setPhoto1] = useState([])
  const [photo2, setPhoto2] = useState([])


  useEffect(() => {
    fetch(`/api/skinglo/photo/${product1[2]}`)
      .then((res) => res.json())
      .then((photo) => setPhoto1(photo));
  }, []);

  useEffect(() => {
    fetch(`/api/skinglo/photo/${product2[2]}`)
      .then((res) => res.json())
      .then((photo) => setPhoto2(photo));
  }, []);


  return (

    <main className="container-fluid">
    <div
      className="justify-content-center bg-img bg-compare-tint"
      style={{
        backgroundImage: `url("../photos/desaturated_compare-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundPositionX: "center",
      }}
    >
      <div className="p-5">
          <div className="row bg-warning pt-5 mx-5 justify-content-center">
            <div className="col-7">
            <h2 className="text-center">It's Not a Match!</h2>
            <p className="conflict-reason text-center p-5 mx-5">
              {conflict}
              </p>
              </div>
          </div>
        <div className="row justify-content-center align-items-center bg-light  bg-opacity-75 mx-5 h-75">
          <div className="d-flex col-lg-3 justify-content-center">
            <div className="card card-nonmatch shadow">
              <img
                className="card-img-top card-style"
                src={photo1[0]?.image}
                alt="Card image cap"
              />
              <div className="card-body p-3">
                <p className="card-text">
                  {" "}
                  {product1[0]}<br></br> <strong> {product1[1]}</strong>
            
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-1 m-5 justify-content-center">
            <div className="text-center ampersand">&</div>
          </div>
          <div className=" d-flex col-lg-3 justify-content-center">
            <div className="card card-nonmatch shadow">
              <img
                className="card-img-top card-style"
                src={photo2[0]?.image}
                alt="Card image cap"
              />
              <div className="card-body p-3">
                <p className="card-text">
                  {" "}
                  {product2[0]}<br></br> <strong> {product2[1]}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center ">
              <button className="btn btn-info compare-btn shadow"onClick={compareMore} >
                Compare More
              </button>
          </div>
        </div>
      </div>
    </div>
  </main>

    
  );
};

interface NonMatchProps {
  product1:any
  product2:any
  conflict:any
}

export default NonMatch;
