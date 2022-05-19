import { useEffect } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';

import Analytics from '@aws-amplify/analytics';
import { Auth } from 'aws-amplify'
import { Authenticator  } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

// Analytics Code
const mapObj = f => obj =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: f(obj[key]) }), {});
const toArrayOfStrings = value => [`${value}`];
const mapToArrayOfStrings = mapObj(toArrayOfStrings);


function App() {
  useEffect(() => {
    trackUserId();
  }, []);

  // Analytics Code
  // Taken from: http://aws-react-amplify.ws.kabits.com/adding-analytics/
  async function trackUserId() {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const userAttributes = mapToArrayOfStrings(attributes);
      console.log("-----> " + JSON.stringify(userAttributes));
      Analytics.updateEndpoint({
        address: userAttributes.email[0],
        channelType: 'EMAIL',
        optOut: 'NONE',
        userId: userAttributes.sub[0],
        userAttributes,
      });
    } catch (error) {
      console.log(error);
    }
  }

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

