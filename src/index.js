import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainContainer from './containers/MainContainer';
import TabMenu0 from './containers/TabMenu0';
import IndexPage from './containers/IndexContainer';
import ChooseLine from './containers/ChooseLine';
import configureStore from './store/configureStore';
import TabContainer from './containers/TabContainer';
import OverViewContainer from './containers/Dashboard/OverViewContainer';
import AlarmContainer from './containers/Dashboard/AlarmContainer';
import SummaryContainer from './containers/Dashboard/SummaryContainer';
import DownTimeContainer from './containers/Dashboard/DownTimeContainer';
import OutPutContainer from './containers/Dashboard/OutPutContainer';

injectTapEventPlugin();

// Adjust side for Navbar and pageContent
//document.getElementById('app').style.marginRight = '15px';
document.getElementById('app').style.overflowX = 'hidden';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const routerSet = () => {
  return(
    <Router history={ history }>
      <Route path="/" component={IndexPage}/>
        <Route path="/select-line" component={ChooseLine}/>
        <Route path="/www" component={MainContainer}>
          <IndexRoute component={TabContainer}/>
          <Route path="/Dashboard/www" component={TabContainer}>
            <IndexRoute component={OverViewContainer}/>
            <Route path="/Dashboard/Overview/www" component={OverViewContainer}/>
            <Route path="/Dashboard/Summary/www" component={SummaryContainer}/>
            <Route path="/Dashboard/Output/www" component={OutPutContainer}/>
            <Route path="/Dashboard/Downtime/www" component={DownTimeContainer}/>
            <Route path="/Dashboard/Alarm/www" component={AlarmContainer}/>
          </Route>
          <Route path="/ICT_1/www" component={TabMenu0}/>
          <Route path="/ICT_2/www" component={TabMenu0}/>
          <Route path="/ICT_1_CV/www" component={TabMenu0}/>
          <Route path="/ICT_2_CV/www" component={TabMenu0}/>
          <Route path="/Transfer_CV/www" component={TabMenu0}/>
          <Route path="/Buffer_CV/www" component={TabMenu0}/>
          <Route path="/Router_CV/www" component={TabMenu0}/>
          <Route path="/Change_Line/www" component={TabMenu0}/>
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
