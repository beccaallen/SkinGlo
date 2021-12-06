import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as React from "react";
import { useEffect, useState } from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";
import SearchBar from "../components/SearchBar";



const Compare: React.FC<CompareProps> = (props) => {
  // const see = "visible"
  // const dontSee = "hidden"
  const [products, setProducts] = useState([]);
  const [SearchList, setSearchList] = useState([]);
  const [SearchList2, setSearchList2] = useState([]);
  const [fieldSearch, setFieldSearch] = useState("");
  const [fieldSearch2, setFieldSearch2] = useState("");
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [searchValue, setSearchValue] = useState(null)
  const [searchValue2, setSearchValue2] = useState(null)
  const [homeView, setHomeView] = useState(true)
  const [matchView, setMatchView] = useState(false)
  const [nonMatchView, setNonMatchView] = useState(false)
 
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
      if(fieldSearch) {
        return product.name.includes(fieldSearch.toLowerCase());  
      }
    });
  };

  const filterFieldSearch2 = () => {
    return products.filter((product) => {
      if(fieldSearch2) {

        return product.name.includes(fieldSearch2.toLowerCase());
      }
    });
  };

  const setSearch1 = (name:string, brand:string, id:number) => {
    setFieldSearch(null)
    setProduct1([name, brand, id])
    setSearchValue(`${name} by ${brand}`)

  };
  const setSearch2 = (name:string, brand:string, id:number) => {
    setFieldSearch2(null)
    setProduct2([name, brand, id])
    setSearchValue2(`${name} by ${brand}`)


  };

  const handleMatch = () => {
    setHomeView(false)
    setMatchView(true)
  
  }



  
  if (homeView) {

  return (
 
    <>
      <main className="container-fluid" >
        <div
          className="row h-100 justify-content-center align-items-center bg-compare-tint bg-opacity-75"
          style={{
            backgroundImage: `url("../photos/desaturated_compare-bg.jpg")`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
            
          }}
        >
          <div className="p-5 " >
            <div className="d-flex h-75 bg-light align-items-center justify-content-center bg-opacity-75">
              <div className="row d-flex justify-content-center align-items-center p-5">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                    <SearchBar
                      value = {searchValue}
                      placeholder="Search"
                      handleChange={(e: any) => setFieldSearch(e.target.value)}
                      filterResults={SearchList}
                      setProduct={(name: string, brand:string, id:number) => setSearch1(name, brand, id)}
                    />
                  </div>

                  <div className="col-lg-4 col-md-2 d-flex justify-content-center">
                    <div className="text-center ampersand text-secondary">&</div>
                  </div>

                  <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                    <SearchBar
                      value = {searchValue2}
                      placeholder="Search"
                      handleChange={(e: any) => setFieldSearch2(e.target.value)}
                      filterResults={SearchList2}
                      setProduct={(name: string, brand:string, id:number) => setSearch2(name, brand, id)}

                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center m-5 py-5">
                  <button className="col-lg-3 col-md-2 btn btn-info compare-btn shadow m-3 " onClick={handleMatch}>
                    See if it's a match
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </>
  );
} else if ((matchView)) { 
  return (
    <Match />
  )

} else if ((nonMatchView)) {
  return (
    <NonMatch />
  )

}
 
};

interface CompareProps {}

export default Compare;
