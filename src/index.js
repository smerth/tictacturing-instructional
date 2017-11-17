import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/';
import {Router, browserHistory} from 'react-router';
import Relay from 'react-relay';
import userRelay from 'react-router-relay';
import {RelayNetworklayer, urlMiddleware} from 'react-relay-networklaayer';
import {relayApi} from './config/endpoints';
import auth from './utils/auth';

const createHeaders = () => {
  let idToken = auth.getToken()
  if (idToken) {
    Authorization: `Bearer ${idToken}`
  } else {
    return {}
  }
}



ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
    />,
    document.getElementById('root')
);
