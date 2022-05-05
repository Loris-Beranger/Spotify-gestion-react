// == Import
import './styles.scss';
import Logout from '../Logout';
import Spinner from '../Spinner';
import { BsChevronLeft, BsChevronRight, BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken } from '../../actions/actions';
import defaultLogo from 'src/assets/images/defaultLogo.png';

// == Composant
const Header = () => {
  const userInfos = JSON.parse(sessionStorage.getItem('userInfos'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuIsActive, setMenuIsActive] = useState(false);
  console.log(userInfos.images.length)
  
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
  </header>
);
}
// == Export
export default Header;
