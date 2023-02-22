import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import InfoIcon from '@mui/icons-material/Info';
import requests from '../config/Requests';
import './Banner.scss';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handlePopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <header
      className="banner relative bg-gray-900"
      style={bannerStyle}
    >
      <div className="banner__content absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-white text-center">
        <h1 className="banner__title text-3xl md:text-5xl font-bold mb-4">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description text-base md:text-lg mb-4">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons flex items-center justify-center">
          <button className="banner__button bg-red-500 text-white py-2 px-4 rounded-full mr-4">
            <PlayCircleFilledWhiteIcon />
            Lecture
          </button>
         
        </div>
      </div>
      {popup && (
        <div className="banner__popup absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-10 flex items-center justify-center">
          <div className="popup__content max-w-3xl mx-4 md:mx-auto text-white text-center">
            <h2 className="popup__title text-2xl md:text-4xl font-bold mb-4">
              {movie?.title || movie?.name || movie?.original_title}
            </h2>
            <p className="popup__description text-base md:text-lg mb-4">
              {movie?.overview}
            </p>
            <button
              className="popup__button bg-red-500 text-white py-2 px-4 rounded-full"
              onClick={handlePopup}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Banner;
