import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FacilityStatus from '../../components/lms/FacilityStatus';
import { getFacilityStatus } from '../../stores/lms/facility';

const FacilityStatusContainer = () => {
  const dispatch = useDispatch();
  const [dateTime, setDateTime] = useState(new Date());

  const { facilityStatusData } = useSelector(({ facility }) => ({
    facilityStatusError: facility.facilityStatusError,
    facilityStatusData: facility.facilityStatusData,
  }));

  const setTime = useCallback(() => {
    setDateTime(new Date());
  }, []);

  const getData = useCallback(() => {
    if (global.masterSite) {
      dispatch(
        getFacilityStatus({
          masterSite: global.masterSite,
          siteGroup: '',
        }),
      );
    }
  }, [dispatch]);

  useEffect(() => {
    setInterval(setTime, 1000);
  }, [setTime]);

  useEffect(() => {
    getData();
    setInterval(getData, 10000);
  }, [getData]);

  //useEffect(() => {
  //  console.log('facilityStatusData', facilityStatusData);
  //}, [facilityStatusData]);

  return (
    <FacilityStatus
      facilityStatusData={facilityStatusData}
      dateTime={dateTime}
    />
  );
};

export default FacilityStatusContainer;
