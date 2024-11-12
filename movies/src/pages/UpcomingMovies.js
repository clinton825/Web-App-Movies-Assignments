import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';

const UpcomingMoviesPage = (props) => {
  // Use the new API call 'getUpcomingMovies'
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />  {/* Favorite icon */}
            <AddToWatchlistIcon movie={movie} />  {/* New Watchlist icon */}
          </>
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;
