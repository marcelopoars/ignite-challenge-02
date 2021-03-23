import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{ Value: string }>;
    imdbID?: string;
  }>;
}

export function Content({ movies }: ContentProps) {
  // Complete aqui

  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
