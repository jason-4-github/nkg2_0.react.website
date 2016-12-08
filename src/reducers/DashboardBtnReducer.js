import { CATCH_RADIOBOX_DATA, CATCH_DATEPCIKER_DATA,
          THROW_FILTER_DATA, GET_FILTER_DATA} from '../constants/actionTypes';

const initialState = {
  isType: false
};

export const getData = ( state = initialState , action ) => {
  switch(action.type){
    case CATCH_RADIOBOX_DATA:
      return {
        isType: true ,
        ...action
      };
    case CATCH_DATEPCIKER_DATA:
      return {
        ...state,
        isType: true,
        ...action
      };
    case THROW_FILTER_DATA:
      return {
        ...state,
        isType: true,
        ...action
      };
    case GET_FILTER_DATA:
      return {
        ...state,
        isType: true,
        ...action
      };
    default:
      return state;
  }

};

export const closeOpen = (state={OpenClose:true}, action) => {
  switch(action.type){
    case 'CHECK_OPEN_CLOSE':
      return {
        ...action
      };
    default:
      return state;
  }
};
