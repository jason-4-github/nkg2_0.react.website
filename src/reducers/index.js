import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoadData from './loadDataReducer';
import DashboardBtn from './DashboardBtnReducer';
import CheckData from './CheckData';

const rootReducer = combineReducers({
  CheckData,
  DashboardBtn,
  LoadData,
  routing: routerReducer
});

export default rootReducer;
