import React, { useState } from "react";
import requests from "../config/Requests";
import Banner from "./Banner";
import Row from "./Rows";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CookieConsent from "react-cookie-consent";

import "./Video.scss";

function Abonne() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container-fluid">
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        cookieName="my-gdpr-cookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.
      </CookieConsent>
      <div className="row">
        {/* Navbar */}
        <nav className="navbar col-md-12">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Recherchez un film ..."
              value={searchValue}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <button className="login-btn red-btn login-btn-small">
            <ExitToAppIcon />
            Login
          </button>
        </nav>


      </div>

      <div className="row">
        {/* Sidebar */}
        <aside className="sidebar col-md-3">
          <div className="sidebar__title">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-500">My</span>-MZ
            </h1>
          </div>
        </aside>

        {/* Content */}
        <div className="col-md-9">
          <div className="content">
            <div className="photo-container">
              <Banner />
            </div>

            {/* Category containers */}
            <div className="category-container">
              <div className="row-container">
                <Row
                  title="Programmes originaux"
                  fetchUrl={requests.fetchNetflixOriginals}
                  isPoster={true}
                />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Films Horreurs" fetchUrl={requests.fetchHorrorMovies} />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
              </div>
            </div>

            <div className="category-container">
              <div className="row-container">
                <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abonne;