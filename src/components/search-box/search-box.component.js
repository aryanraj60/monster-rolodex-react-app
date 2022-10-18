import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ onChangeHander, className, placeholder }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHander}
      />
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onChangeHander } = this.props;
//     return (
//
//     );
//   }
// }

export default SearchBox;
