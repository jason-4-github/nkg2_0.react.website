import { CATCH_DATEPCIKER_DATA, THROW_FILTER_DATA, GET_FILTER_DATA } from '../constants/actionTypes';

export const DatePickerData = (DateData) => (dispatch, getState) => {
  dispatch({
    type: CATCH_DATEPCIKER_DATA,
    DateData
  });
};

export const ThrowFilterData = (RadioData) => (dispatch) => {
  dispatch({
    type: THROW_FILTER_DATA,
    RadioData
  });
};

export const GetFilterData = (lastData='') => ( dispatch ) => {
  let TempData = (lastData === '' ? "Day" : lastData);
  dispatch({
    type: GET_FILTER_DATA,
    RadioData: TempData
  });
};
