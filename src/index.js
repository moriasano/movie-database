import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Analytics from '@aws-amplify/analytics';

// AWS Amplify
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Analytics Code
Analytics.autoTrack('session', {
  enable: true,
  attributes: {
      attr: 'attr'
  },
});
Analytics.autoTrack('pageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  eventName: 'pageView',
  type: 'SPA',  // 'Single Page Application
  getUrl: () => {
      return window.location.origin + window.location.pathname;
  }
});

