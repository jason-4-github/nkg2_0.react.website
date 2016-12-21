import { GET_INFO1_REQUEST, GET_INFO1_SUCCESS,
        GET_INFO1_FAILURE, GET_TABLEDATA_SUCCESS,
        GET_TABLEDATA_FAILURE, GET_CHARTDATA_SUCCESS,
        GET_CHARTDATA_FAILURE } from '../constants/actionTypes';

export const CheckData = ( state = {} , action ) => {
  switch(action.type){
    case GET_INFO1_REQUEST:
      return {
        ...state,
        ...action
      };
    case GET_INFO1_SUCCESS:
      return {
        ...state,
        ...action
      };
    case GET_INFO1_FAILURE:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};

export const TableContent = ( state = {} , action ) => {
  switch(action.type){
    //Todo request
    case GET_TABLEDATA_SUCCESS:
      return {
        ...state,
        ...action
      };
    case GET_TABLEDATA_FAILURE:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};

export const ChartContent = ( state = {} , action ) => {
  switch(action.type){
    //Todo request
    case GET_CHARTDATA_SUCCESS:
      return {
        ...action
      };
    case GET_CHARTDATA_FAILURE:
      return {
        ...action
      };
    default:
      return state;
  }
};
