import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING);

export const finishLoading = createAction(FINISH_LOADING);

const initialState = {
  loading: false,
};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
);

export default loading;
