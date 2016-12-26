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
import MobilePage from './containers/MobilePage';
import ChooseLineContainer from './containers/ChooseLineContainer';
import configureStore from './store/configureStore';
import TabContainer from './containers/TabContainer';
import OverViewContainer from './containers/Dashboard/OverViewContainer';
import AlarmContainer from './containers/Dashboard/AlarmContainer';
import SummaryContainer from './containers/Dashboard/SummaryContainer';
import DownTimeContainer from './containers/Dashboard/DownTimeContainer';
import OutPutContainer from './containers/Dashboard/OutPutContainer';

injectTapEventPlugin();

// Hide the x-axis scroll bar in side menu
document.getElementById('app').style.overflowX = 'hidden';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const routerSet = () => {
  return(
    <Router history={ history }>
      <Route path="/" component={ IndexPage } />
      <Route path="/m" component={ MobilePage } />
      <Route path="/select-line" component={ ChooseLineContainer } />
      <Route path="/:line" component={ MainContainer }>
        <IndexRoute component={ TabContainer } />
        <Route path="/Dashboard/:line" component={ TabContainer }>
          <IndexRoute component={ OverViewContainer } />
          <Route path="/Dashboard/Overview/:line" component={ OverViewContainer } />
          <Route path="/Dashboard/Summary/:line" component={ SummaryContainer } />
          <Route path="/Dashboard/Output/:line" component={ OutPutContainer } />
          <Route path="/Dashboard/Downtime/:line" component={ DownTimeContainer } />
          <Route path="/Dashboard/Alarm/:line" component={ AlarmContainer } />
        </Route>
        <Route path="/ICT_1/:line" component={ TabMenu0 } />
        <Route path="/ICT_2/:line" component={ TabMenu0 } />
        <Route path="/ICT_1_CV/:line" component={ TabMenu0 } />
        <Route path="/ICT_2_CV/:line" component={ TabMenu0 } />
        <Route path="/Transfer_CV/:line" component={ TabMenu0 } />
        <Route path="/Buffer_CV/:line" component={ TabMenu0 } />
        <Route path="/Router_CV/:line" component={ TabMenu0 } />
        <Route path="/Change_Line/:line" component={ TabMenu0 } />
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
