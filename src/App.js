import './styles/App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';


import { Authenticator  } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';


// import Home from './Home';

function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
        {({ signOut, user }) => (
          <div>
            <Navigation signOut={signOut} username={user.username} className="navbar" />

            <div className='content'>
              <Home />
            </div>
            
          </div>
        )}
      </Authenticator>
  );
}

export default App;

