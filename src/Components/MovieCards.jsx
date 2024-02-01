import MovieCard from "./MovieCard";
import { useMovie } from "../Context/movieContext";

const MovieCards = () => {
  const { movies } = useMovie();

  return (
    <section className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </section>
  );
};

export default MovieCards;
