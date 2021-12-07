import * as React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Confetti from 'react-dom-confetti';


const Match: React.FC<MatchProps> = ({product1, product2}) => {
  // const config = {
  //   angle: "185",
  //   spread: "360",
  //   startVelocity: "95",
  //   elementCount: 70,
  //   dragFriction: "0.47",
  //   duration: "1990",
  //   stagger: "9",
  //   width: "21px",
  //   height: "22px",
  //   perspective: "900px",
  //   colors: ["#000", "#333", "#666"]
  // };

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

console.log(photo1[0])
console.log(photo2[0])

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
          {/* <Confetti active={ true } config={ config }/> */}
        <div className="p-5">
            <div className="row bg-success p-5 mx-5">
              <h2 className="text-center">It's a Match!</h2>
            </div>
          <div className="row justify-content-center align-items-center bg-light mx-5 h-75 bg-opacity-75">
            <div className="d-flex col-lg-3 justify-content-center">
              <div className="card card-match shadow">
                <img
                  className="card-img-top card-style"
                  src={photo1[0]?.image}
                  alt="Card image cap"
                />
                <div className="card-body p-3">
                  <p className="card-text"
                            >
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
              <div className="card card-match shadow">
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
                <button className="btn btn-info compare-btn shadow" onClick={compareMore}>
                  Compare More
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface MatchProps {
  product1 :any, 
  product2: any
}

export default Match;
