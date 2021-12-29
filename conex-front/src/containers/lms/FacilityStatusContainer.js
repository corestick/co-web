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

  useEffect(() => {
    const timer = setTimeout(setTime, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [dateTime, setTime]);

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
    getData();
  }, [getData]);

  useEffect(() => {
    console.log(new Date());
    const timer = setTimeout(getData, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [facilityStatusData, getData]);

  return (
    <FacilityStatus
      facilityStatusData={facilityStatusData}
      dateTime={dateTime}
    />
  );
};

export default FacilityStatusContainer;
