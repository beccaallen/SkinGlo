import * as React from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";

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

                            <div className="row d-flex justify-content-center align-items-center">
                                <form className="d-flex justify-content-center align-items-center">
                                    <div className="col-lg-4 col-md-2 col-sm-1">
                                        <label className="py-3"><strong>1st</strong> Product</label>
                                        <i className="bi bi-search"></i>
                                        <input className="form-control mr-sm-2 search-bar shadow" type="search" placeholder="Search" aria-label="Search" />
                                    </div>

                                    <div className="col-lg-4 col-md-2 d-flex justify-content-center">
                                        <div className="text-center ampersand text-white">&</div>
                                    </div>

                                    <div className="col-lg-4 col-md-2">
                                        <label className="py-3"><strong>2nd</strong> Product</label>
                                        <input className="form-control mr-sm-2 search-bar shadow" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                                </form>
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