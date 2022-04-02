// == Import
import './styles.scss';

// == Composant
const Login = () => {
  const CLIENT_ID = "86639255d8834c2ebb9939052213659f";
  const REDIRECT_URI = "http://localhost:8080/callback";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SHOW_DIALOG = true;
  const SCOPE = 'user-read-playback-state user-modify-playback-state user-read-private user-read-email playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-library-modify user-library-read streaming';
  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
  const STATE = generateRandomString(16);

  return (
    <div className="login">
      <h1>Spotify Gestion</h1>
      <h2>Gérer vos playlists</h2>
      <a className='login-button' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}&scope=${SCOPE}&state=${STATE}`}>Login</a>
    </div>
  );
};

// == Export
export default Login;
