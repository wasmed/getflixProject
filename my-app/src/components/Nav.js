import React from 'react';
import { useState } from 'react';
import "./Nav.scss";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import Button from '@mui/material/Button';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExploreIcon from '@mui/icons-material/Explore';


function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className={`nav ${navBlack ? 'nav--black' : 'nav--transparent'} p-4 md:p-8`}>
        <div className="nav__logo-container">
          <img src="https://media.giphy.com/media/26xBtiY1Hyvt2iwEw/giphy.gif" alt="movie" className="nav__logo" />
        </div>
        <div className="nav__search flex items-center w-full md:w-auto">
          <SearchIcon style={{ color: '#ddd', marginLeft: '10px' }} />
          <input
            type="text"
            placeholder="Recherchez un film ou une série..."
            value={searchValue}
            onChange={handleSearchChange}
            className="bg-transparent rounded-full border border-gray-500 p-2 ml-2 w-full md:w-auto"
          />
        </div>
        <div className="nav__actions flex items-center mt-4 md:mt-0">
          <Button variant="contained" startIcon={<NotificationsIcon />} color="inherit" className="mr-4 md:mr-8" />
          <Button variant="contained" startIcon={<MessageIcon />} color="inherit" className="mr-4 md:mr-8" />
          <Button variant="contained" color="error" className="mr-4 md:mr-8">Sign In</Button>
        </div>
        <button className="nav__sidebar-toggle md:hidden" onClick={toggleSidebar}><MenuIcon /></button>
      </div>
      <div className={`sidebar ${showSidebar ? 'active' : ''} bg-black bg-opacity-60 w-72 h-screen fixed top-0 right-0 z-10 pt-24`}>
        <ul>
        <li><a href="/" className="p-4 flex items-center"><ExploreIcon className="mr-2" />Browse</a></li>
          <li><a href="/" className="p-4 flex items-center"><ScheduleIcon className="mr-2" />Coming Soon</a></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;




