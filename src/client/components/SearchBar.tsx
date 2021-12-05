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
        <div className="dropdown">
                {(props.filterResults).map((names:any , key:number) =>{
                    return (
                        <div className= "dropdown-content"  key={`search-item-${names.id}`} onClick={props.setProduct}>
                          <p><strong>{names.name}</strong></p>
                          <p>{names.brand}</p>
                        </div>
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
  filterResults: any;
  setProduct: any
}

export default SearchBar;
