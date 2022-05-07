// == Import
import './styles.scss';
import Logout from '../Logout';
import Spinner from '../Spinner';
import { BsChevronLeft, BsChevronRight, BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlaylistInfos, setToken } from '../../actions/actions';
import defaultLogo from 'src/assets/images/defaultLogo.png';
import PlaylistInfos from './PlaylistInfos';

// == Composant
const Header = () => {
const axios = require('axios');
  const userInfos = JSON.parse(sessionStorage.getItem('userInfos'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const currentPlaylistId = useSelector((state) => state.currentPlaylistId);
  const currentPlaylistInfos = useSelector((state) => state.currentPlaylistInfos);
  let token = window.localStorage.getItem("token");
  console.log(currentPlaylistInfos)

  useEffect(() => {
    axios
    .get("https://api.spotify.com/v1/playlists/" + currentPlaylistId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch(setCurrentPlaylistInfos(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }, [currentPlaylistId]) 
  
  
return (
  <header className="header">
    <nav className="nav-header">
      <ul className="list-nav">
        <li className="nav-button btn-previous">
          <BsChevronLeft
            className="icon"
            onClick={() => {
              navigate(-1);
            }}
          />
        </li>
        <li className="nav-button btn-next">
          <BsChevronRight
            className="icon"
            onClick={() => {
              navigate(+1);
            }}
          />
        </li>
      </ul>
      <div className="btn-profile" onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}>
        <img src={userInfos.images.length == 0 ? defaultLogo : userInfos.images[0].url} />
        <span>{userInfos.display_name}</span>
        {menuIsActive ? <BsFillCaretUpFill className="btn-open-menu" /> : <BsFillCaretDownFill className="btn-open-menu" />}
        

        <div className={menuIsActive ? "menu-profile-active" : "menu-profile"}>
          <button>Compte</button>
          <button onClick={() => {
            window.localStorage.removeItem("token");
            const action = setToken('');
            dispatch(action);
          }}>Déconnexion</button>
        </div>
      </div>
    </nav>
          
    {currentPlaylistId && <PlaylistInfos
      image_url={currentPlaylistId.images[0].url}
      name={currentPlaylistInfos.name}
      owner_name={currentPlaylistInfos.owner.display_name}
      nb_tracks={currentPlaylistInfos.tracks.total}
    />}      
    
    
  </header>
);
}
// == Export
export default Header;
