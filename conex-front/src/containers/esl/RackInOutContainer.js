import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RackInOut from '../../components/esl/RackInOut';
import { inout } from '../../stores/esl/esl';

const RackInOutContainer = ({ type }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    serialNo: '',
    lotNo: '',
    qty: '',
  });
  const [textValues, setTextValues] = useState({
    serialNo: '',
    lotNo: '',
  });

  const { user, inoutData } = useSelector(({ user, esl }) => ({
    user: user.user,
    inoutData: esl.inoutData,
  }));

  const inputRefs = useRef([]);
  inputRefs.current = [];
  const addToRefs = (el) => {
    if (el !== null) inputRefs.current[el.id] = el;
  };

  const setValue = (id, value) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  const menuAuth = JSON.parse(localStorage.getItem('menuAuth'));

  const onBarcodeChange = (e) => {
    setTextValues({
      ...textValues,
      [e.target.id]: e.target.value,
    });
  };

  const onClick = (e) => {
    const id = e.currentTarget.id;
    switch (id) {
      case 'btnInOut':
        let serialNo = values.serialNo;
        if (serialNo === '' && textValues.serialNo !== '') {
          serialNo = textValues.serialNo;
        }

        let lotNo = values.lotNo;
        if (lotNo === '' && textValues.lotNo !== '') {
          lotNo = textValues.lotNo;
        }

        setValues({
          ...values,
          serialNo,
          lotNo,
        });

        if (serialNo === '') return;

        if (values.qty === '') return;

        dispatch(
          inout({
            masterSite: user.masterSite,
            serialNo: serialNo,
            lotNo: lotNo,
            qty: (type === '출고' ? -1 : 1) * values.qty,
            employeeCode: user.employeeCode,
          }),
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    try {
      setTextValues({
        serialNo: values.serialNo,
        lotNo: values.lotNo,
      });

      if (values.serialNo) {
        if (menuAuth.useLotNo && type === '출고' && !values.lotNo)
          inputRefs.current['lotNo'].focus();
        else inputRefs.current['qty'].focus();
      }
    } catch (e) {
      console.log(e);
    }
  }, [values.serialNo, values.lotNo, inputRefs, menuAuth.useLotNo, type]);

  useEffect(() => {
    if (inoutData) {
      if (inoutData.data.length > 0) {
        if (inoutData.data[0].Result === 'OK') {
          setValues({
            serialNo: '',
            lotNo: '',
            qty: '',
          });
        }
      }
    }
  }, [inoutData, dispatch]);

  useEffect(() => {
    try {
      inputRefs.current['serialNo'].focus();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <RackInOut
      type={type}
      useLotNo={menuAuth.useLotNo}
      onClick={onClick}
      onBarcodeChange={onBarcodeChange}
      values={values}
      setValue={setValue}
      textValues={textValues}
      addToRefs={addToRefs}
    />
  );
};

export default RackInOutContainer;
