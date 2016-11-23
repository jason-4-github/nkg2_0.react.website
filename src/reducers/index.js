import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoadData from './loadDataReducer';
import DashboardBtn from './DashboardBtnReducer';

const rootReducer = combineReducers({
  DashboardBtn,
  LoadData,
  routing: routerReducer
});

export default rootReducer;
