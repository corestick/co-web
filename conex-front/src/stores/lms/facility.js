import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as facilityAPI from '../../api/facility';

const [FACILITYSTATUS, FACILITYSTATUS_SUCCESS, FACILITYSTATUS_FAILURE] =
  createRequestActionTypes('facility/facilityStatus');
const [INITITIALIZE_ERROR] = 'facility/INITITIALIZE_ERROR';

export const getFacilityStatus = createAction(
  FACILITYSTATUS,
  ({ masterSite, siteGroup }) => ({
    masterSite,
    siteGroup,
  }),
);

const getFacilityStatusSaga = createRequestSaga(
  FACILITYSTATUS,
  facilityAPI.getFacilityStatus,
);

export function* facilitySaga() {
  yield takeLatest(FACILITYSTATUS, getFacilityStatusSaga);
}

export const initializeError = createAction(INITITIALIZE_ERROR);

const initialState = {
  facilityStatusData: null,
  facilityStatusError: null,
};

const facility = handleActions(
  {
    [FACILITYSTATUS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      facilityStatusData: data,
      facilityStatusError: null,
    }),
    [FACILITYSTATUS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      facilityStatusData: null,
      facilityStatusError: error,
    }),
    [INITITIALIZE_ERROR]: (state) => ({
      ...state,
      facilityStatusData: null,
      facilityStatusError: null,
    }),
  },
  initialState,
);

export default facility;
