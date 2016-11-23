import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainContainer from './containers/MainContainer';
import { createStore } from 'redux';
import configureStore from './store/configureStore';

injectTapEventPlugin();

// Adjust side for Navbar and pageContent
document.body.style.marginLeft = "200px";
document.body.style.backgroundColor = "#F7F7F7";
document.getElementById('app').style.margin = "-8px";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const routerSet = () => {
  return(
    <Router history={ history }>
      {/*<Route path="/" component={homepage}> for homepage*/}
      <Route path="/" component={MainContainer}>
        <IndexRoute component={MainContainer}/>
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider >
      <MainContainer />
    </MuiThemeProvider>
  </Provider> ,
  document.getElementById('app')
);
