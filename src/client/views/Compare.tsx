import * as React from "react";
import { useEffect, useState } from "react";
import Match from "../components/Match";
import NonMatch from "../components/NonMatch";
import SearchBar from "../components/SearchBar";
import $ from "jquery";

const Compare: React.FC<CompareProps> = (props) => {
  const [products, setProducts] = useState([]);
  const [SearchList, setSearchList] = useState([]);
  const [SearchList2, setSearchList2] = useState([]);
  const [fieldSearch, setFieldSearch] = useState("");
  const [fieldSearch2, setFieldSearch2] = useState("");
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [searchValue2, setSearchValue2] = useState(null);
  const [homeView, setHomeView] = useState(true);
  const [matchView, setMatchView] = useState(false);
  const [nonMatchView, setNonMatchView] = useState(false);
  const [conflicts, setConflicts] = useState([]);

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
      if (fieldSearch) {
        return product.name.includes(fieldSearch.toLowerCase());
      }
    });
  };

  const filterFieldSearch2 = () => {
    return products.filter((product) => {
      if (fieldSearch2) {
        return product.name.includes(fieldSearch2.toLowerCase());
      }
    });
  };

  const setSearch1 = (name: string, brand: string, id: number) => {
    setFieldSearch(null);
    setProduct1([name, brand, id]);
    setSearchValue(`${name} by ${brand}`);
  };
  const setSearch2 = (name: string, brand: string, id: number) => {
    setFieldSearch2(null);
    setProduct2([name, brand, id]);
    setSearchValue2(`${name} by ${brand}`);
  };

  const handleMatch = async () => {
    fetch(`/api/skinglo/conflicts/${product1[2]}&${product2[2]}`)
      .then((res) => res.json())
      .then((conflicts) => {
        setConflicts(conflicts);
        console.log(conflicts);

        if (Object.keys(conflicts).length === 0) {
          setNonMatchView(false);
          setMatchView(true);
        } else {
          setNonMatchView(true);
          setMatchView(false);
        }
      });
  };

  if (nonMatchView) {
    return (
      <NonMatch
        product1={product1}
        product2={product2}
        conflict={conflicts[0]?.reason}
      />
    );
  } else if (matchView) {
    return <Match product1={product1} product2={product2} />;
  } else if (homeView) {
    return (
      <>
        <main className="container-fluid">
          <div
            className="justify-content-center bg-img bg-compare-tint"
            style={{
              backgroundImage: `url("../photos/desaturated_compare-bg.jpg")`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
              backgroundPositionX: "center",
            }}
          >
            <div className="p-5 ">
              <div className="d-flex bg-light align-items-center justify-content-center bg-opacity-75">
                <div className="row d-flex justify-content-center align-items-center p-5">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                      <SearchBar
                        value={searchValue}
                        placeholder="Search"
                        handleChange={(e: any) =>
                          setFieldSearch(e.target.value)
                        }
                        filterResults={SearchList}
                        setProduct={(name: string, brand: string, id: number) =>
                          setSearch1(name, brand, id)
                        }
                      />
                    </div>

                    <div className="col-lg-4 col-md-2 d-flex justify-content-center">
                      <div className="text-center ampersand text-secondary">
                        &
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-2 col-sm-1 d-flex justify-content-center searchContainer">
                      <SearchBar
                        value={searchValue2}
                        placeholder="Search"
                        handleChange={(e: any) =>
                          setFieldSearch2(e.target.value)
                        }
                        filterResults={SearchList2}
                        setProduct={(name: string, brand: string, id: number) =>
                          setSearch2(name, brand, id)
                        }
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center py-5">
                    <button
                      className="col-lg-3 col-md-2 btn btn-info compare-btn shadow m-3 "
                      onClick={handleMatch}
                    >
                      See if it's a match
                    </button>
                    <p
                      className="text-muted text-center p-3"
                      data-toggle="modal"
                      data-target="#Feedback"
                    >
                      Where's my product?
                    </p>
                  </div>
                  {/* start feedback modal */}
                  <div
                    className="modal fade"
                    id="Feedback"
                    role="dialog"
                    aria-labelledby="FeedbackTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content p-3">
                        <div className="container-fluid">
                          <div className="d-flex justify-content-start">
                            <button
                              type="button"
                              className="close p-3"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>

                          <div className="modal-header row py-3 ">
                            <h3
                              className="modal-title"
                              id="exampleModalCenterTitle"
                            >
                              Didn't see your product?
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  className="bi bi-emoji-frown text-primary m-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg>
                              </span>
                              </h3>

                       <p className="pt-3">
                              Let us know below what which product you'd like us to
                              review & we'll start running the tests!
                            </p>
                          </div>
                          <div className="modal-body">
                            <input
                              type="text"
                              className="form-control mb-3 shadow"
                              placeholder="Product Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                            <input
                              type="text"
                              className="form-control shadow"
                              placeholder="Brand Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="modal-footer p-3">
                          <button
                            type="button"
                            className="btn btn-info p-3 send-button"
                            data-toggle="modal"
                            data-target="#ThankYouForTheFeedback"
                            data-dismiss="modal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-send-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                              ></path>
                            </svg>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* end feedback modal */}
                  {/* start thankyou modal */}
                  <div
                    className="modal fade"
                    id="ThankYouForTheFeedback"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content p-1">
                        <div className="container-fluid">
                          <div className="modal-header d-flex justify-content-center pt-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              fill="currentColor"
                              className="bi bi-stars text-primary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                            </svg>
                          </div>
                          <div className="modal-body">
                            <h3
                              className="modal-title"
                              id="exampleModalCenterTitle"
                            >
                              Thanks for the Feedback!
                            </h3>
                            <p>We'll get you glo-ing soon! </p>
                          </div>
                        </div>
                        <div className="modal-footer p-3">
                          <button
                            type="button"
                            className="btn btn-info p-3 send-button"
                            data-toggle="modal"
                            data-dismiss="modal"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-x-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end thankyou modal */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

interface CompareProps {}

export default Compare;
