import MovieCard from "./MovieCard";
import { useMovie } from "../Context/movieContext";

const MovieCards = () => {
  const { movies } = useMovie();

  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieCards;
