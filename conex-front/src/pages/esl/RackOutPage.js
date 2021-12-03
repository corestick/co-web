import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import RackInOutContainer from '../../containers/esl/RackInOutContainer';

const RackOutPage = () => {
  const type = '출고';

  return (
    <>
      <HeaderContainer title={type} />
      <RackInOutContainer type={type} />
    </>
  );
};

export default RackOutPage;
