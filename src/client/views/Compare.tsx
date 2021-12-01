import * as React from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";

const Compare: React.FC<CompareProps> = () => {

    // const handleSubmit = () => {
    //     if ()
    // }

    return (
<>
        <main className="container-fluid">
            <div className="row h-100 justify-content-center " style={{
          backgroundImage: `url("../photos/bg-compare.jpeg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
        }}>
            <form className="row justify-content-center align-items-center bg-primary  bg-opacity-75 mt-5 mx-5">
                <fieldset className="col-lg-2">
                    <label><strong>1st</strong> Product</label>
                <i className="bi bi-search"></i>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </fieldset>
                <fieldset className="col-lg-2">
                    <div className="text-center ampersand text-white">&</div>
                </fieldset>
                <div className="col-lg-2">
                <label><strong>2nd</strong> Product</label>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <fieldset className="row justify-content-center ">
                    <div className="col-lg-2"><button className="btn btn-info compare-btn shadow-md m-3">See if it's a match</button></div>
                </fieldset>
            </form>

            </div>
        </main>
        < Match />
        < NonMatch />
        </>
    )

}


interface CompareProps {}

export default Compare;