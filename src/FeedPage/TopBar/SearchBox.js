import './SearchBox.css'

const SearchBox = () => {
  return (
    <form className="d-flex" role="search" id="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>

  );
};

export default SearchBox;
