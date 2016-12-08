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

export const SideMenuControl = (_OpenClose='') => ( dispatch, getState ) =>{
  let OpenClose = getState().closeOpen.OpenClose ;
  OpenClose = (OpenClose === true ? false : true );
  console.log(getState().closeOpen.OpenClose);
  dispatch({
    type: 'CHECK_OPEN_CLOSE',
    OpenClose
  });
};
