import * as React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

const Home: React.FC<HomeProps> = () => {
  return (
    <main className="container-fluid">
      {/* < HeroSlider /> */}
        <div className="row h-75 hero-slider">
          <div className="col-lg-6 bg-primary background-tint-primary bg-opacity-100 " style={{
            backgroundImage: `url("../photos/sam-limon-g5oq-wH71OQ-unsplash.jpg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
          }}>
          </div>
          <div className="col-lg-6 bg-info background-tint-info" style={{
            backgroundImage: `url("../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
          }}>
          </div>
        </div>
      
      <div className="row hero-text">
        <div className="col-lg-5 text-center">
          <h1 className="text-light p-3">Get to Glo!</h1>
          <h2 className="p-3"> finding compatible skincare has never been easier</h2>
          <Link to="/compare"><button className="btn btn-info compare-btn shadow m-3">start comparing</button></Link>
        </div>
      </div>
      {/* divider */}
      <div className="row justify-content-center m-5">
        <div className="col-lg-3 p-5 mx-5 text-center">
          <span className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-x text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <h6>Identify conflicting ingredients</h6>
          <br></br>
          <p>
            Products often have many unknown ingredients, with names that are hard to pronounce.
            Making it difficult for everday consumers, to figure out which products will work best. 
           
          </p>

        </div>
        <div className="col-lg-3 p-5 mx-5  text-center">
          <span className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-check2-all text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
              <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
            </svg>
          </span>
          <h6>Validate your perfect pairing</h6>
          <br></br>

          <p>
          Identifying which ingredients are not compatible is key to an excellent skin care regimen.
          We make it easier for everday consumers, by having 2,000+ products that can 
          be checked for compatibility!
          </p>
        </div>
        <div className="col-lg-3 p-5 mx-5  text-center">
          <span className="p-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              fill="currentColor"
              className="bi bi-stars m-3 text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
          </span>
          <h6 >Get on your way to glowing skin</h6>
          <br></br>

          <p>
            We take the guesswork out of skincare, making it easier to build an effective regimen and educate on 
            why certain products do not pair well together. 
          </p>
        </div>
      </div>
      <div className="h-75 bg-primary background-tint-secondary product-logos" style={{
        backgroundImage: `url("../photos/bg-logos.jpeg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
      }}>
        <div className="row bg-primary bg-opacity-75 align-items-center">
          <h2 className="text-dark m-5">compare 2,000+ products</h2>
        </div>
        <div className="row justify-content-center align-items-center h-50">
          <div className="col-lg-3 d-flex justify-content-center">
            <img src="../photos/Keihls.png" alt="Keihl's Logo" height="100px" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <img src="../photos/cosrx-logo.png" alt="CosRx Logo" height="50px" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center">
            <img src="../photos/DrunkElephant-logo.png" alt="Drunk Elephant Logo" height="130px" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-lg-3 d-flex justify-content-center m-5">
            <img src="../photos/ElishaCoy-logo.png" alt="Elisha Coy Logo" height="60px" />
          </div>
          <div className="col-lg-3 d-flex justify-content-center m-5">
            <img src="../photos/amorepacific-logo.png" alt="Amore Pacific Logo" height="40px" />
          </div>
          
        </div>
      </div>


    </main>
  );
};

interface HomeProps { }

export default Home;
