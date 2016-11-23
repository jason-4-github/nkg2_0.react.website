import { GET_TABLEDATA_REQUEST, GET_TABLEDATA_SUCCESS,
         GET_TABLEDATA_FAILURE } from '../constants/actionTypes';

const initialState = {
  id: '',
  Name: '',
  Status: '',
  isNow: "tableInfo"
};

const TableInfo = ( state = initialState , action ) => {
  switch(action.type){
    case GET_TABLEDATA_REQUEST :
      console.log("enter Reque")
      return {
        ...action.TableInfo.reduce((obj, tableInfo) => {
          obj[tableInfo.id] = tableInfo
          return obj
        }, {})
      };
    case GET_TABLEDATA_SUCCESS:
      return {
        ...state,
        order: 2
      };
    case GET_TABLEDATA_FAILURE:
      return {
        ...state,
        order: 3
      };
    default:
      return state;
  }
};

export default TableInfo ;
