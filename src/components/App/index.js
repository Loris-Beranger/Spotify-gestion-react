// == Import
import { useState, useEffect } from 'react';
import './styles.scss';

// == Composant
import Login from 'src/components/Login';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className='app'>
      {!isLogged && <Login isLogged={isLogged}/>}
    </div>
    
  );
};



// == Export
export default App;
