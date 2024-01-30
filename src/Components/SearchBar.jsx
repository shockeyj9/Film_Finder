import SearchIcon from "../search.svg";
import { useMovie } from "../Context/movieContext";

const SearchBar = () => {
  const { setSearchTerm, searchTerm, searchMovies } = useMovie();

  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
