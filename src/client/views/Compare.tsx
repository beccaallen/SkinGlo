import * as React from "react";
import { useEffect, useState } from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";
import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";

const Compare: React.FC<CompareProps> = () => {
  // const handleSubmit = () => {
  //     if ()
  // }
  const [products, setProducts] = useState([]);
  const [SearchList, setSearchList] = useState([]);
  const [SearchList2, setSearchList2] = useState([]);
  const [fieldSearch, setFieldSearch] = useState("");
  const [fieldSearch2, setFieldSearch2] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const filteredList = filterFieldSearch();
    setSearchList(filteredList.slice(0, 3));
  }, [fieldSearch]);

  useEffect(() => {
    const filteredList = filterFieldSearch2();
    setSearchList2(filteredList.slice(0, 3));
  }, [fieldSearch2]);

  const filterFieldSearch = () => {
  
    return products.filter((product) => {
      return product.name.includes(fieldSearch.toLowerCase());
    
    });
    
  };

  const filterFieldSearch2 = () => {
    return products.filter((product) => {
      return product.name.includes(fieldSearch2.toLowerCase());
    });
  };
console.log(SearchList)
console.log(fieldSearch)
console.log(filterFieldSearch())
  return (
    <>
      <main className="container-fluid">
        <div
          className="row h-100 justify-content-center align-items-center bg-compare-tint"
          style={{
            backgroundImage: `url("../photos/bg-compare.jpeg")`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
          }}
        >
          <div className="p-5">
            <div className="d-flex h-75 bg-primary bg-opacity-75 align-items-center justify-content-center">
              <div className="row d-flex justify-content-center align-items-center p-5">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                    <SearchBar
                  
                      placeholder={"Search"}
                      handleChange={(e: any) => setFieldSearch(e.target.value)}
                      filterResults={SearchList}
                      setProduct={""}
                    />
                  </div>

                  <div className="col-lg-4 col-md-2 d-flex justify-content-center">
                    <div className="text-center ampersand text-white">&</div>
                  </div>

                  <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                    <SearchBar
                      placeholder="Search"
                      handleChange={(e: any) => setFieldSearch2(e.target.value)}
                      filterResults= {SearchList2}
                      setProduct={""}
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center m-5 py-5">
                  <button className="col-lg-3 col-md-2 btn btn-info compare-btn shadow m-3 ">
                    See if it's a match
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NonMatch />
      <Match />
    </>
  );
};

interface CompareProps {}

export default Compare;
