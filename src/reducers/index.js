import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoadData from './loadDataReducer';
import { getData, closeOpen } from './DashboardBtnReducer';
import { CheckData, TableContent, ChartContent } from './CheckData';

const rootReducer = combineReducers({
  CheckData,
  TableContent,
  ChartContent,
  getData,
  closeOpen,
  LoadData,
  routing: routerReducer
});

export default rootReducer;
