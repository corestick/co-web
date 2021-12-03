import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from '../../components/common/Backdrop';
import Snackbar from '../../components/common/Snackbar';
import { initializeError } from '../../stores/lms/facility';
import { openAlert, closeAlert } from '../../stores/common/alert';

const Utilites = () => {
  const { alert } = useSelector(({ alert }) => ({
    alert: alert,
  }));

  const { loading, authError, facilityStatusData, facilityStatusError } =
    useSelector(({ loading, auth, facility }) => ({
      loading: loading.loading,
      authError: auth.authError,
      facilityStatusData: facility.facilityStatusData,
      facilityStatusError: facility.facilityStatusError,
    }));
  const dispatch = useDispatch();

  const onCloseAlert = () => {
    dispatch(closeAlert());
  };

  useEffect(() => {
    if (authError) {
      console.log(authError);
      dispatch(
        openAlert({
          type: 'error',
          msg: '로그인 실패',
        }),
      );
    }

    if (facilityStatusError) {
      dispatch(
        openAlert({
          type: 'error',
          msg: '실패했습니다.',
        }),
      );
    }
  }, [authError, facilityStatusError, dispatch]);

  useEffect(() => {
    if (facilityStatusData) {
      if (facilityStatusData.data.length === 0) {
        dispatch(
          openAlert({
            type: 'warning',
            msg: '데이터가 없습니다.',
          }),
        );
      }
    }
  }, [facilityStatusData, dispatch]);

  useEffect(() => {
    dispatch(initializeError());
  }, [alert, dispatch]);

  return (
    <>
      <Backdrop loading={loading} />
      <Snackbar alert={alert} onCloseAlert={onCloseAlert} />
    </>
  );
};

export default Utilites;
