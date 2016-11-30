import { GET_INFO1_REQUEST, GET_INFO1_SUCCESS,
        GET_INFO1_FAILURE } from '../constants/actionTypes';

const CheckData = ( state = {} , action ) => {
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
export default CheckData;
