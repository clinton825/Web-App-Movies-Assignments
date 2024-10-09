import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList"; // Import only what you need

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>HomePage</h1>
      </Grid>
      <Grid container>
        <MovieList movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
};

export default HomePage;
