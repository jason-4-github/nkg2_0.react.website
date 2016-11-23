import { CATCH_RADIOBOX_DATA, CATCH_DATEPCIKER_DATA,
          THROW_FILTER_DATA, GET_FILTER_DATA } from '../constants/actionTypes';

export const RadioBoxData = (Data) => (dispatch, getState) => {
  dispatch({
    type: CATCH_RADIOBOX_DATA,
    Data
  });
};

export const DatePickerData = (DateData) => (dispatch, getState) => {
  dispatch({
    type: CATCH_DATEPCIKER_DATA,
    DateData
  });
};

export const ThrowFilterData = (Data) => (dispatch) => {
  dispatch({
    type: THROW_FILTER_DATA,
    Data
  });
};

export const GetFilterData = (Data) => ( dispatch, getState ) => {
  const { DashboardBtn } = getState();
  let TempData = (DashboardBtn.Data === undefined ? "Day" : DashboardBtn.Data);
  dispatch({
    type: GET_FILTER_DATA,
    Data: TempData
  });
};
