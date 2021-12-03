import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import RackInOutContainer from '../../containers/esl/RackInOutContainer';

const RackInPage = () => {
  const type = '입고';

  return (
    <>
      <HeaderContainer title={type} />
      <RackInOutContainer type={type} />
    </>
  );
};

export default RackInPage;
