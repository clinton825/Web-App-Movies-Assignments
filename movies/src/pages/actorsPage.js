import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getPopularPeople } from '../api/tmdb-api';

const ActorsPage = () => {
  const navigate = useNavigate();
  const { data: popularActors, isLoading, isError, error } = useQuery(
    'popularActors',
    getPopularPeople
  );

  const [selectedActor, setSelectedActor] = useState(null);

  // Log the popularActors to check its structure
  useEffect(() => {
    console.log("Fetched actors data:", popularActors);
  }, [popularActors]);

  useEffect(() => {
    if (popularActors && popularActors.results && popularActors.results.length > 0) {
      setSelectedActor(popularActors.results[0]);
    }
  }, [popularActors]);

  const handleActorClick = (actor) => {
    setSelectedActor(actor);
    navigate(`/actors/${actor.id}`); // Navigate to the actor's details page
  };

  if (isLoading) {
    return <div>Loading actors...</div>;
  }

  if (isError) {
    return <div>Error loading actors: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Actors</h1>
      <div>
        <h2>Actors</h2>
        {popularActors?.results?.length > 0 ? (
          <ul>
            {popularActors.results.map((actor) => (
              <li key={actor.id} onClick={() => handleActorClick(actor)}>
                {actor.name}
              </li>
            ))}
          </ul>
        ) : (
          <div>No actors found.</div>
        )}
      </div>
      {selectedActor && (
        <div>
          <h2>{selectedActor.name}</h2>
          {selectedActor.biography && <p>{selectedActor.biography}</p>}
          <h3>Known For:</h3>
          <ul>
            {selectedActor.known_for?.map((movie) => (
              <li key={movie.id}>{movie.title || movie.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActorsPage;
