// == Import
import './styles.scss';
import { BsFillCaretRightFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addTrackToPlaylists } from '../requetes';
import { useQuery } from 'react-query';

// == Composant
const ContextMenu = () => {
  const axios = require('axios');
  const [className, setClassName] = useState('context-menu-playlists');
  let listUserPlaylists = useSelector((state) => state.listUserPlaylists);
  const [xPos, setXPos] = useState("10px");
  const [yPos, setYPos] = useState("10px");
  const [showMenu, setShowMenu] = useState(false);
  const [selectTrack, setSelectTrack] = useState('');
  const [listSelectPlaylists, setListSelectPlaylists] = useState([]);
  let token = window.localStorage.getItem("token");

  const handleContextMenu = (e) => {
    const parent = e.target.closest('.track');
    if (parent != null) {
      e.preventDefault();
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
      setSelectTrack(parent.getAttribute("data-id"))
    }
  }

  const handleClick = (e) => {
    const target = e.target.closest('.wrapper-context-menu');
    if (target == null) {
      showMenu && setShowMenu(false);
    }

  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return (
    <div
      className='wrapper-context-menu'
      style={{
        top: yPos,
        left: xPos,
      }}
    >
      {showMenu && <ul className="context-menu">
        <li><span>Ajouter à la file d'attente</span></li>
        <li className='btn-add-to-playlists' onMouseEnter={() => {
          setClassName('context-menu-playlists active');
        }} onMouseLeave={() => {
          setClassName('context-menu-playlists');
        }}><span>Ajouter aux playlists</span><BsFillCaretRightFill /></li>
        <li><span>Sauvegarder dans Titres likés</span></li>
        <li><span>Supprimer de cette playlist</span></li>
      </ul>}

      <div
        className={className}
        onMouseEnter={() => {
          setClassName('context-menu-playlists active');
        }} onMouseLeave={() => {
          setClassName('context-menu-playlists');
        }}
      >
        <ul className='list-playlists'>
          {listUserPlaylists.map((item) => (
            <li className='contextMenu-playlist'>
              <span>{item.name}</span>
              <input
                type='checkbox'
                className='checkboxPlaylist'
                data-id={item.id}
                onChange={(e) => {
                  const playlistId = e.target.getAttribute('data-id');
                  if (e.target.checked == true) {
                    setListSelectPlaylists(listSelectPlaylists.concat(playlistId));
                  }
                  else {
                    setListSelectPlaylists(listSelectPlaylists.filter(item => item !== playlistId));
                  }
                }}
              />
            </li>
          ))}

        </ul>
        <button className='btn-add' onClick={() => {
          console.log(selectTrack)
          console.log(listSelectPlaylists)
          const datas = {
            "uris": selectTrack,
          }
          
          listSelectPlaylists.forEach((playlistId) => {
            $.ajax({
              url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${selectTrack}`,
              headers: {
                  'Authorization': 'Bearer ' + token
              },
              type: 'POST',
              dataType: "json",
              success: function (response) {
                console.log(response);
              }
          });
          })
    
        }}>Ajouter</button>
      </div>

    </div>
  );
};

// == Export
export default ContextMenu;
