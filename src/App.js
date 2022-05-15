import './styles/App.css';
import Navigation from './Navigation';

import { Button } from 'react-bootstrap';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Authenticator  } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';



// import Home from './Home';

function App() {
  return (
    <Authenticator>
        {({ signOut, user }) => (
          <div>
            <Navigation signOut={signOut} username={user.username}></Navigation>
            {/* User: {user.username}
            <Button onClick={signOut}>Log Out</Button> */}
  
          </div>
        )}
      </Authenticator>
  );
}

export default App;

