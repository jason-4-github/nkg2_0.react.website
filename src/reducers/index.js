import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoadData from './loadDataReducer';
import DashboardBtn from './DashboardBtnReducer';
import {CheckData, TableContent,ChartContent} from './CheckData';

const rootReducer = combineReducers({
  CheckData,
  TableContent,
  ChartContent,
  DashboardBtn,
  LoadData,
  routing: routerReducer
});

export default rootReducer;
