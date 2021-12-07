import * as React from "react";
import { useEffect, useState } from "react";

const NonMatch: React.FC<NonMatchProps> = ({product1, product2}) => {

  const [photos, setPhotos] = useState([])


  useEffect(() => {
    fetch(`/api/skinglo/photo/${product1[2]}`)
      .then((res) => res.json())
      .then((photos) => setPhotos(photos));
  }, []);
console.log(photos[0])

  return (

    <main className="container-fluid">
    <div
      className="h-100 justify-content-center bg-img bg-compare-tint"
      style={{
        backgroundImage: `url("../photos/desaturated_compare-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundPositionX: "center",
      }}
    >
      <div className="p-5">
          <div className="row bg-danger p-5 mx-5">
            <h2 className="text-center">It's Not a Match!</h2>
            <p className="conflict-reason text-center p-5 mx-5">
                Because {product1[0]} contains <strong>lectus magna </strong> &
                {product2[0]} contains <strong>fringilla urna </strong> this
                products are noncompatible. Metus aliquam eleifend mi in nulla
                posuere sollicitudin. Semper eget duis at tellus at urna
                condimentum mattis.
              </p>
          </div>
        <div className="row justify-content-center align-items-center bg-light  bg-opacity-75 mx-5 h-75">
          <div className="d-flex col-lg-3 justify-content-center">
            <div className="card card-nonmatch shadow">
              <img
                className="card-img-top card-style"
                src={`${photos.image}`}
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
                src={`${photos.image}`}
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
              <button className="btn btn-info compare-btn shadow" >
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
}

export default NonMatch;
