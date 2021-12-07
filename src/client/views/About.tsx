import * as React from "react";

const About: React.FC<AboutProps> = (props) => {
  return (
    <main className="container-fluid">
      <div className="row m-5 justify-content-center">
        <div className="col-6 d-flex p-5 justify-content-end">
          <img
            className="hero-about"
            src="../photos/audrey-fretz-3ExPoluud54-unsplash.jpg"
            alt="Woman with glowing skin"
          />
        </div>
        <div className="col-6  p-5 justify-content-center">
          <h1 className="mb-5 mx-5">
            Find your solution - we’ll do the chemistry!
          </h1>
          <p className="m-5">
            At SkinGlo, we understand how overwhelming it can be to find the an
            effective and soothing skincare regimin. While products may have
            ingredients list a mile-long, we wanted to create a simple interface
            that does all the work behind the scenes. Don’t stress or guess, we
            got your back and your skin!{" "}
          </p>
        </div>
      </div>

{/* divider */}

      <div className="row d-flex justify-content-center m-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              className="bi bi-star-fill text-secondary"
              viewBox="0 0 30 30"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              className="bi bi-star-fill text-secondary"
              viewBox="0 0 30 30"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              className="bi bi-star-fill text-secondary"
              viewBox="0 0 30 30"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="currentColor"
              className="bi bi-star-fill text-secondary"
              viewBox="0 0 30 30"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-star-half text-secondary"
              viewBox="0 0 30 30"
            >
              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
            </svg>
          </div>
          <div  >
                <div className="d-flex justify-content-center">
                    <h6>4.7 out of 5 </h6>
                </div>
                <div className="d-flex justify-content-center">
                    <p>12,341 Reviews</p>
                </div>
          </div>
        
        

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol><div className="carousel-inner mt-3">
              <div className="carousel-item active">
                <h6 className="text-center">
                  “ For years I was having trouble with acne flair ups, and my
                  dermatologist had continued recommending different combinations of
                  facial cleansers, moisturizers, exfoliates, etc. along with
                  prescriptive solutions as well. However, my flair ups persisted,
                  and it wasn’t until I started comparing my products using SkinGlo
                  that I realized the issue was using these products together.
                  SkinGlo has helped me become more aware of the reactions my
                  products have when used with each other, and I always use SkinGlo
                  before I add a new product to my routine! ”
                </h6>
                <br></br>
                <p className="d-flex justify-content-end">- - Spencer D. </p>
              </div>
              <div className='carousel-item'>
                <h6 className="text-center">
                  “ I have never been very knowledgeable of the proper skincare.
                  Now, that I'm older, taking care of my skin is definitely of
                  high importance. Thanks to SkinGlo, I am able to easily pick the
                  right products for my skin. ”
                </h6>
                <br></br>
                <p className="d-flex justify-content-end">- - K. Lanice </p>
              </div>
              <div className="carousel-item">
                <h6 className="text-center">
                  “ Thanks SkinGlo for making this process effortless! You have
                  drastically reduced the amount of time it takes me to find the
                  right products. Now, I don't have to do so much research when
                  working with my clients. I can just visit this site and find
                  what I need in seconds!!! ”
                </h6>
                <br></br>
                <p className="d-flex justify-content-end">- - Carol W. </p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
          </div>
      


{/* divider */}

      <div
        className="bg-primary background-tint-secondary product-logos"
        style={{
          backgroundImage: `url("../photos/bg-meettheteam.jpeg")`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundPositionX: "center",
        }}
      >
        <div className="row bg-primary bg-opacity-75 align-items-center my-3 pb-3">
          <h2 className="text-dark text-center m-5">meet the team behind SkinGlo</h2>
        </div>

        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-3 d-flex justify-content-center">
            <div className="card team-card">
              <img
                src="../photos/beccaallen.jpg"
                className="card-img-top headshots-about shadow"
                alt="..."
              />
              <div className="card-body team-name">
                <p className="card-text">Becca Allen</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
          <div className="card team-card">
              <img
                src="../photos/IB-logo.jpeg"
                className="card-img-top headshots-about shadow"
                alt="..."
              />
              <div className="card-body team-name">
                <p className="card-text">Cameron Buchanan</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
          <div className="card team-card">
              <img
                src="../photos/JuwanRobinson.jpg"
                className="card-img-top headshots-about shadow"
                alt="..."
              />
              <div className="card-body team-name">
                <p className="card-text">Juwan Robinson</p>
              </div>
            </div>

          </div>
        
        </div>

        <div className="row d-flex justify-content-center align-items-center my-3 pb-3">
          
          <div className="col-lg-3 d-flex justify-content-center">
          <div className="card team-card">
              <img
                src="../photos/KyeJuanaAvery.jpg"
                className="card-img-top headshots-about shadow"
                alt="..."
              />
              <div className="card-body team-name">
                <p className="card-text">KyeJuana Avery</p>
              </div>
            </div>
      
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
          <div className="card team-card">
              <img
                src="../photos/GenesisGarcia.JPG"
                className="card-img-top headshots-about shadow"
                alt="..."
              />
              <div className="card-body team-name">
                <p className="card-text">Genesis Garcia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface AboutProps {}

export default About;
