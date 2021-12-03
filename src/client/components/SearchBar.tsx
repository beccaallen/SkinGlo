import * as React from "react";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div>
      <label className="py-3">
        <strong>1st</strong> Product
      </label>
      <div className="searchInputs">
        <input
          className="form-control mr-sm-2 search-bar shadow"
          type="search"
          onChange={props.handleChange}
          placeholder={props.placeholder}
          aria-label="Search"
        />
        <div className="dataResults">
                {(props.fitlerResults).map((names: string) =>{
                    return (
                        <p>{names}</p>
                    )

                })}
            
        </div>
      </div>
    </div>
  );
};

interface SearchBarProps {
  handleChange: any;
  placeholder: any;
  fitlerResults: any;
}

export default SearchBar;
