import * as React from "react";

const Compare: React.FC<CompareProps> = () => {

    return (

        <main className="container-fluid">
            <div className="row h-100 background-tint-primary justify-content-center " style={{
          backgroundImage: `url("../photos/bg-compare.jpeg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
        }}>
            <div className="row justify-content-center align-items-center bg-primary  bg-opacity-75 mt-5 mx-5">
                <div className="col-lg-2">
                    <label><strong>1st</strong> Product</label>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="col-lg-2">
                    <div className="text-center ampersand">&</div>
                </div>
                <div className="col-lg-2">
                <label><strong>2nd</strong> Product</label>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-lg-2"><button className="btn btn-info compare-btn shadow-md m-3">See if it's a match</button></div>
                </div>
            </div>

            </div>
        </main>
    )

}


interface CompareProps {}

export default Compare;