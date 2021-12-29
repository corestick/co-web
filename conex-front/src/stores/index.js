import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth/auth';
import loading from './common/loading';
import user, { userSaga } from './auth/user';
import facility, { facilitySaga } from './lms/facility';
import esl, { eslSaga } from './esl/esl';
import alert from './common/alert';
import theme from './common/theme';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  facility,
  esl,
  alert,
  theme,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), facilitySaga(), eslSaga()]);
}

export default rootReducer;
