import * as React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://skincare-api.herokuapp.com/product?q=rose&limit=25&page=1")
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    const [search, setSearch] = useState([]);

    // const doingASearch = (event) => {
    //     this.setSearch({
    //         [event.target.name]: event.target.value
    //     })

        return (
            <div>
                <form className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-2 col-sm-1">
                        <label className="py-3"><strong>1st</strong> Product</label>
                        <i className="bi bi-search"></i>
                        <input className="form-control mr-sm-2 search-bar shadow" type="search" onChange={this.doingASearch}
                            placeholder="Search" aria-label="Search" />
                    </div>

                    <div className="col-lg-4 col-md-2 d-flex justify-content-center">
                        <div className="text-center ampersand text-white">&</div>
                    </div>

                    <div className="col-lg-4 col-md-2">
                        <label className="py-3"><strong>2nd</strong> Product</label>
                        <input className="form-control mr-sm-2 search-bar shadow" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </form>
            </div>

        );
    };

    interface SearchBarProps { }

    export default SearchBar;
