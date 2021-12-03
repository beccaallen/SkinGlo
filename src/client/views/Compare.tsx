import * as React from "react";
import { useEffect, useState } from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";
import SearchBar from "../components/SearchBar";

const Compare: React.FC<CompareProps> = () => {

    // const handleSubmit = () => {
    //     if ()
    // }

    
    return (
        <>
    {/* path for image is from public/js/app.js to public/photos/products */}

        {/* <img src={} alt="" /> */}
            <main className="container-fluid">
                <div className="row h-100 justify-content-center align-items-center" style={{
                    backgroundImage: `url("../photos/bg-compare.jpeg")`, backgroundSize: 'cover', backgroundPositionY: 'center', backgroundPositionX: 'center'
                }}>
                    <div className="p-5">
                        <div className="d-flex h-75 bg-primary bg-opacity-75 align-items-center justify-content-center">

                            <div className="row d-flex justify-content-center align-items-center p-5">
                             
                            <SearchBar/>

                                <div className="row d-flex justify-content-center m-5 py-5">
                                    <button className="col-lg-3 col-md-2 btn btn-info compare-btn  shadow m-3 ">See if it's a match</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
            < NonMatch />
            < Match />
        </>
    )

}


interface CompareProps { }

export default Compare;