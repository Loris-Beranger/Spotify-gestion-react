// == Import
import './styles.scss';
// == Composant

const Logout = ({ setToken }) => {
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    
  }
  return (
    <div className="logout">      
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// == Export
export default Logout;
