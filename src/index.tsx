import './index.css';
import 'antd/dist/antd.css';
import './firebaseApp';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((_) => (
          <Route
            key={_.path}
            exact={_.exact}
            path={_.path}
            children={_.component}
          />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
