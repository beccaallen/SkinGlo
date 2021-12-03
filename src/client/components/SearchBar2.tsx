import * as React from "react";

const SearchBar2: React.FC<SearchBarProps> = (props) => {
  return (
    <div>
      <label className="py-3">
        <strong>1st</strong> Product
      </label>
      <i className="bi bi-search"></i>
      <input
        className="form-control mr-sm-2 search-bar shadow"
        type="search"
        onChange={props.handleChange2}
        placeholder={props.placeholder}
        aria-label="Search"
      />
    </div>
  );
};

interface SearchBarProps {
  handleChange2: any;
  placeholder: string;
}

export default SearchBar2;
