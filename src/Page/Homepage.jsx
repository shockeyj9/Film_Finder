import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import MovieCards from "../Components/MovieCards";
import NoneFound from "../Components/NoneFound";
import { useMovie } from "../Context/movieContext";

const Homepage = () => {
  const { movies, useInitalMovieLoad } = useMovie();

  useInitalMovieLoad();
  return (
    <div className="app">
      <Header />
      <SearchBar />
      {movies?.length > 0 ? <MovieCards /> : <NoneFound />}
    </div>
  );
};

export default Homepage;
