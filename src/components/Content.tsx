import React from "react"
import { MovieCard } from "./MovieCard"

import '../styles/content.scss';

interface MovieProps 
{
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieInfo
{
  movies: Array<MovieProps>;
  titleContent: string;
}

export const Content = ({titleContent, movies}: MovieInfo) =>
{
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {titleContent}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard  key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}