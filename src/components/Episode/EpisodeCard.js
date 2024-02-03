import React, { useState, useEffect } from "react";
import EpisodeDetails from "./EpisodeDetails";

const EpisodeCard = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleEpisodeClick = (episodeId) => {
    setSelectedEpisode(episodeId);
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setEpisodes(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Episode List</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => handleEpisodeClick(episode.id)}>
            {episode.name}
          </li>
        ))}
      </ul>

      {selectedEpisode && <EpisodeDetails episodeId={selectedEpisode} />}
    </div>
  );
};

export default EpisodeCard;
