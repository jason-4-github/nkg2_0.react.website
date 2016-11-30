import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainContainer from './containers/MainContainer';
import TabMenu0 from './containers/TabMenu0';
import configureStore from './store/configureStore';
import TabContainer from './containers/TabContainer';
import OverViewContainer from './containers/Dashboard/OverViewContainer';
import AlarmContainer from './containers/Dashboard/AlarmContainer';
import SummaryContainer from './containers/Dashboard/SummaryContainer';
import DownTimeContainer from './containers/Dashboard/DownTimeContainer';
import OutPutContainer from './containers/Dashboard/OutPutContainer';

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
      <Route path="/" component={MainContainer}>
        <IndexRoute component={TabContainer}/>
        <Route path="/Dashboard" component={TabContainer}>
          <IndexRoute component={OverViewContainer}/>
          <Route path="/Dashboard/Overview" component={OverViewContainer}/>
          <Route path="/Dashboard/Summary" component={SummaryContainer}/>
          <Route path="/Dashboard/Output" component={OutPutContainer}/>
          <Route path="/Dashboard/Downtime" component={DownTimeContainer}/>
          <Route path="/Dashboard/Alarm" component={AlarmContainer}/>
        </Route>
        <Route path="/ICT_1" component={TabMenu0}/>
        <Route path="/ICT_2" component={TabMenu0}/>
        <Route path="/ICT_1_CV" component={TabMenu0}/>
        <Route path="/ICT_2_CV" component={TabMenu0}/>
        <Route path="/Transfer_CV" component={TabMenu0}/>
        <Route path="/Buffer_CV" component={TabMenu0}/>
        <Route path="/Router_CV" component={TabMenu0}/>
        <Route path="/Change_Line" component={TabMenu0}/>
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider >
      {routerSet()}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
