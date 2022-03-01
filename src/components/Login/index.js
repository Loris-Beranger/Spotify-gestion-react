// == Import

import './styles.scss';

// == Composant
const Login = () => {
  const handleLogin = ({isLogged}) => {
    console.log(isLogged);
  }

  return (
    <div className="login">
      <h1>Spotify Gestion</h1>
      <h2>Gérer vos playlists</h2>
      <button className='login-button' onClick={handleLogin}>Login</button>
    </div>
  );
};

// == Export
export default Login;
