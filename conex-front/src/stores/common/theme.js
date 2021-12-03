import { createAction, handleActions } from 'redux-actions';

const DARK_MODE = 'theme/DARK_MODE';

export const changeThemeMode = createAction(DARK_MODE);

const initialState = {
  darkMode: false,
};

const theme = handleActions(
  {
    [DARK_MODE]: (state, { payload: darkMode }) => ({
      ...state,
      darkMode: darkMode,
    }),
  },
  initialState,
);

export default theme;
