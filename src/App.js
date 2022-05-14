import './App.css';

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      <div>
        <h1>
          Search for Movies!
        </h1>

        {({signOut, user}) => (
          <div>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </div>
    </Authenticator>
  );
}

export default App;
