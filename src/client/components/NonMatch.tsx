import * as React from "react";

const NonMatch: React.FC<NonMatchProps> = (props) => {
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
                Because Product 1 contains <strong>lectus magna </strong> &
                Product 2 contains <strong>fringilla urna </strong> this
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
                src="../photos/products/AmorPacific time response eye renewal creme.jpg"
                alt="Card image cap"
              />
              <div className="card-body p-3">
                <p className="card-text">
                  {" "}
                  Time Response Skin Renewal Serum<br></br> <strong> Amore Pacific</strong>
            
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
                src="https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/8098296_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$"
                alt="Card image cap"
              />
              <div className="card-body p-3">
                <p className="card-text">
                  {" "}
                  The Moisturizing Soft Cream<br></br> <strong> La Mer</strong>
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

    // <main className="container-fluid">
    //   <div
    //     className="h-100 justify-content-center bg-img"
    //     style={{
    //       backgroundImage: `url("../photos/bg-compare.jpeg")`,
    //       backgroundSize: "cover",
    //       backgroundPositionY: "center",
    //       backgroundPositionX: "center",
    //     }}
    //   >
    //     <div className="p-5">
          // <div className="row bg-danger p-5 mx-5">
          //     <h2 className="text-center">It's a Not a Match!</h2>
              // <p className="conflict-reason text-center p-5 mx-5">
              //   Because Product 1 contains <strong>lectus magna </strong> &
              //   Product 2 contains <strong>fringilla urna </strong> this
              //   products are noncompatible. Metus aliquam eleifend mi in nulla
              //   posuere sollicitudin. Semper eget duis at tellus at urna
              //   condimentum mattis.
              // </p>
          // </div>
    //       <div className="row justify-content-center align-items-center bg-primary  bg-opacity-75 mx-5 h-75">
    //         <div className=" d-flex justify-content-center col-lg-3 ">
    //           <div className="card card-nonmatch justify-content-center shadow">
    //             <img
    //               className="card-img-top"
    //               src="../photos/products/t.l.c. sukari babyfacial.jpg"
    //               alt="Card image cap"
                  
    //             />
    //             <div className="card-body p-3">
    //               <p className="card-text">
    //                 {" "}
    //                 t.l.c. sukari babyfacial <br></br> <strong> Drunk Elephant</strong>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className=" d-flex justify-content-center col-lg-1 ">
    //           <div className="text-center ampersand text-white">&</div>
    //         </div>
    //         <div className=" d-flex justify-content-center col-lg-3 ">
    //           <div className="card card-nonmatch shadow">
    //             <img
    //               className="card-img-top card-style"
    //               src="https://www.sephora.com/productimages/sku/s2222941-main-zoom.jpg?imwidth=315"
    //               alt="Card image cap"
    //             />
    //             <div className="card-body p-3">
    //               <p className="card-text">
    //                 {" "}
    //               C.E.O  antioxidant protect + repair moisturize <br></br> <strong> Sunday Riley </strong>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row justify-content-center ">
    //             <button className="btn btn-info compare-btn shadow">
    //               Compare More
    //             </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

interface NonMatchProps {}

export default NonMatch;
