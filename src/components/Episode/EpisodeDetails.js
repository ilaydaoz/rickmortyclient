// EpisodeDetails.js
import React, { useState, useEffect } from "react";

const EpisodeDetails = ({ episodeId }) => {
  const [episodeDetails, setEpisodeDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        const data = await response.json();
        setEpisodeDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episode details:", error);
        setLoading(false);
      }
    };

    fetchEpisodeDetails();
  }, [episodeId]);

  if (loading) {
    return <p>Loading episode details...</p>;
  }

  return (
    <div>
      <h2>
        {episodeDetails.name}
        {episodeDetails.air_date}
        {episodeDetails.episode}
        {episodeDetails.characters}
      </h2>
    </div>
  );
};

export default EpisodeDetails;
