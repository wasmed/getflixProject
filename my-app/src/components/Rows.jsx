import React, { useState, useEffect } from "react";
import "./Row.scss";
import YouTube from "react-youtube";
import axios from "axios";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isPoster }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = async (movie) => {
    try {
      const url = await movieTrailer(movie?.name || movie?.title || "");
      const videoId = new URLSearchParams(new URL(url).search).get("v");
      if (videoId) {
        setTrailerUrl(videoId);
        console.log(`https://www.youtube.com/watch?v=${videoId}`);
      }
    } catch (error) {
      console.log(error);
      setTrailerUrl("");
    }
  };
  

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            {trailerUrl && movie.id === trailerUrl ? (
              <YouTube videoId={trailerUrl} opts={opts} />
            ) : (
              <img
                onClick={() => handleClick(movie)}
                src={`${baseUrl}/${movie.poster_path}`}
                className={`row__image ${isPoster && "row__imageLarge"}`}
                alt={movie?.title || movie?.name || movie?.original_title}
              />
            )}
          </div>
        ))}
      </div>
      {trailerUrl && (
        <div className="youtube__video">
          <iframe
            title="Trailer"
            src={`https://www.youtube.com/watch?v=${trailerUrl}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Row;
