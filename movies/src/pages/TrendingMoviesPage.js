import React from "react";
import { useQuery } from 'react-query';
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';

const TrendingMoviesPage = () => {
  
  const { data, error, isLoading, isError } = useQuery('trending', getTrendingMovies);

  
  if (isLoading) {
    return <Spinner />;
  }

  
  if (isError) {
    console.error(error); 
    return <h1>Error: {error.message}</h1>;
  }

  
  if (!data || !data.results) {
    return <h1>No data available</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
         
        </>
      )}
    />
  );
};

export default TrendingMoviesPage;
