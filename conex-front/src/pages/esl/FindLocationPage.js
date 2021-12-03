import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import FindLocationContainer from '../../containers/esl/FindLocationContainer';

const FindLocation = () => {
  return (
    <>
      <HeaderContainer title={'위치찾기'} />
      <FindLocationContainer />
    </>
  );
};

export default FindLocation;
