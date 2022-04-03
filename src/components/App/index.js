// == Import
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
// == Composant
import Login from 'src/components/Login';
import Logout from '../Logout';
import ListPlaylists from '../ListPlaylists';
import Header from '../Header';
import Player from '../Player';
import { Routes, Route, Link } from 'react-router-dom';
import ListTracks from '../ListTracks';

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
        window.location.replace("http://localhost:8080/listPlaylists");
    }
    setToken(token);
}, [])

  return (
    <div className='app'>
      {!token && <Login  />}
      {token && 
        <div className='gestion-app'>
          <Header setToken={setToken}/>
          <Routes>
            <Route path="/listPlaylists" element={<ListPlaylists />} />      
            <Route path="/listTracks" element={<ListTracks />} />       
          </Routes>
          <Player />
        </div>
      }
    </div>
    
  );
};



// == Export
export default App;
