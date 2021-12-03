import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as eslAPI from '../../api/esl';

const [FIND, FIND_SUCCESS, FIND_FAILURE] = createRequestActionTypes('esl/FIND');
const [INOUT, INOUT_SUCCESS, INOUT_FAILURE] =
  createRequestActionTypes('esl/INOUT');

const [INITITIALIZE_ERROR] = 'esl/INITITIALIZE_ERROR';

export const find = createAction(
  FIND,
  ({ branchCode, itemCode, employeeCode }) => ({
    branchCode,
    itemCode,
    employeeCode,
  }),
);

const findSaga = createRequestSaga(FIND, eslAPI.find);

export const inout = createAction(
  INOUT,
  ({ masterSite, serialNo, lotNo, qty, employeeCode }) => ({
    masterSite,
    serialNo,
    lotNo,
    qty,
    employeeCode,
  }),
);

const inoutSaga = createRequestSaga(INOUT, eslAPI.inout);

export function* eslSaga() {
  yield takeLatest(FIND, findSaga);
  yield takeLatest(INOUT, inoutSaga);
}

export const initializeError = createAction(INITITIALIZE_ERROR);

const initialState = {
  findData: null,
  findError: null,
  inoutData: null,
  inoutError: null,
};

const esl = handleActions(
  {
    [FIND_SUCCESS]: (state, { payload: findData }) => ({
      ...state,
      findData: findData,
      findError: null,
    }),
    [FIND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      findData: null,
      findError: error,
    }),
    [INOUT_SUCCESS]: (state, { payload: inoutData }) => ({
      ...state,
      inoutData: inoutData,
      inoutError: null,
    }),
    [INOUT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inoutData: null,
      inoutError: error,
    }),
    [INITITIALIZE_ERROR]: (state) => ({
      ...state,
      findData: null,
      inoutData: null,
      findError: null,
      inoutError: null,
    }),
  },
  initialState,
);

export default esl;
