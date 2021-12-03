import { createAction, handleActions } from 'redux-actions';

const OPEN_ALERT = 'alert/OPEN_ALERT';
const CLOSE_ALERT = 'alert/COLSE_ALERT';
const INITITIALIZE_ALERT = 'alert/INITITIALIZE_ALERT';

export const openAlert = createAction(OPEN_ALERT, ({ type, msg }) => ({
  type,
  msg,
}));

export const closeAlert = createAction(CLOSE_ALERT);

export const initializeAlert = createAction(INITITIALIZE_ALERT);

const initialState = {
  visible: false,
  type: 'success',
  msg: '',
};

const alert = handleActions(
  {
    [OPEN_ALERT]: (state, { payload: { type, msg } }) => ({
      ...state,
      visible: true,
      type: type,
      msg: msg,
    }),

    [CLOSE_ALERT]: (state) => ({
      ...state,
      visible: false,
    }),

    [INITITIALIZE_ALERT]: () => initialState,
  },
  initialState,
);

export default alert;
