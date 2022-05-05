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
import { useQuery } from 'react-query';
import { getCurrentUser } from '../requetes';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
        window.location.replace("http://localhost:8080/listPlaylists");
    }
    const action = setToken(token)
    dispatch(action)
}, [])
  console.log(token)
  const queryKey = ['user', token];
  const {isLoading, data, error} = useQuery(queryKey, () => getCurrentUser(token), {
    refetchOnWindowFocus: false,
  });
  const userInfos = data;
  if(data) {
    console.log(data.data)
    sessionStorage.setItem('userInfos', JSON.stringify(data.data));
  }

  return (
    <div className='app'>
      {!token && <Login  />}
      {token && 
        <div className='gestion-app'>
          <Header/>
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
