import './SearchBox.css'

const SearchBox = () => {
  //shwing the search box
  return (
    <form className="d-flex" role="search" id="search">
    <input id="search-box" className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"></input>
  </form>

  );
};

export default SearchBox;
