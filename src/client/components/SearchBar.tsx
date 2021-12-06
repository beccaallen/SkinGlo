import * as React from "react";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div>
      <label className="py-3">
        <strong>Select</strong> Product
      </label>
      <div className="searchInputs">
        <input
          className="form-control mr-sm-2 search-bar shadow"
          type="search"
          onChange={props.handleChange}
          placeholder={props.placeholder}
          aria-label="Search"
          value={props.value}
        />
        <ul className="dropdown">
          {props.filterResults.map((names: any, key: number, id:number) => {
            return (
              <li
                className="dropdown-content"
                key={`search-item-${names.id}`}
                onClick={() => props.setProduct(names.name, names.brand, names.id)}
              >
                <p>
                  <strong>{names.name}</strong>
                </p>
                <p>{names.brand}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

interface SearchBarProps {
  handleChange: any;
  placeholder: any;
  filterResults: any;
  setProduct: any;
  value: any
}

export default SearchBar;
