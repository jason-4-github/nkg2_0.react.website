import * as ActionTypes from '../constants/actionTypes';
import MiddleFun from '../apis/MiddleFun';

const getTableInfo = (TableInfo) => ({
  type: ActionTypes.GET_TABLEDATA_REQUEST,
  TableInfo
});

export const getAllInfo = () => (dispatch) => {
  MiddleFun.DataToTable( TableInfo => {
    dispatch(getTableInfo(TableInfo))
  })
};

export const getTableReq = () => ({
  type: ActionTypes.GET_TABLEDATA_REQUEST,
  isNow: "TableReq"
});

export const getTableSucc = () => ({
  type: ActionTypes.GET_TABLEDATA_SUCCESS,
  isNow: "TableSucc"
});

export const getTableFail = () => ({
  type: ActionTypes.GET_TABLEDATA_FAILURE,
  isNow: "TableFAil"
});
