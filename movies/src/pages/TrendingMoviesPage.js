import React from "react";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const TrendingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("trendingMovies", getTrendingMovies);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spinner />
        <p>Loading trending movies...</p>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Error Loading Data</h1>
        <p>{error.message || "An unexpected error occurred. Please try again later."}</p>
      </div>
    );
  }

  if (!data || !data.results || data.results.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>No Trending Movies Found</h1>
        <p>Check back later for the latest trending movies.</p>
      </div>
    );
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchlistIcon movie={movie} />
        </>
      )}
    />
  );
};

export default TrendingMoviesPage;
