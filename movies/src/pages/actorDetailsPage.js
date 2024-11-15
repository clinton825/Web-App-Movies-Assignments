import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPerson } from '../api/tmdb-api';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, isLoading, isError, error } = useQuery(['person', { id }], getPerson);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h2>{actor.name}</h2>
          <p>{actor.biography}</p>
          <h3>Known For:</h3>
          <ul>
            {actor.known_for.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActorDetailsPage;