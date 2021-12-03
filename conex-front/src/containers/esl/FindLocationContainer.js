import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FindLocation from '../../components/esl/FindLocation';
import { find } from '../../stores/esl/esl';

const FindLocationContainer = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    barcode: '',
  });
  const [textValue, setTextValue] = useState('');
  const [storedPlace, setStoredPlace] = useState(null);

  const { user, findData } = useSelector(({ user, esl }) => ({
    user: user.user,
    findError: esl.findError,
    findData: esl.findData,
  }));

  const onBarcodeChange = (e) => {
    setTextValue(e.target.value);
  };

  const onClick = (e) => {
    let barcodeValue = values.barcode;
    if (textValue !== '' && barcodeValue === '') {
      barcodeValue = textValue;
      setValue('barcode', barcodeValue);
    }

    if (barcodeValue === '') return;

    dispatch(
      find({
        branchCode: user.branchCode,
        itemCode: barcodeValue,
        employeeCode: user.employeeCode,
      }),
    );
  };

  const setValue = (id, value) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  const inputRefs = useRef([]);
  inputRefs.current = [];
  const addToRefs = (el) => {
    if (el !== null) inputRefs.current[el.id] = el;
  };

  useEffect(() => {
    if (!values.barcode) {
      setStoredPlace(null);
    }

    if (findData) {
      try {
        setStoredPlace(findData.data);
      } catch (e) {}
    }

    setTextValue(values.barcode);
  }, [values, findData]);

  useEffect(() => {
    try {
      inputRefs.current['barcode'].focus();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <FindLocation
      onClick={onClick}
      values={values}
      setValue={setValue}
      onBarcodeChange={onBarcodeChange}
      textValue={textValue}
      storedPlace={storedPlace}
      addToRefs={addToRefs}
    />
  );
};

export default FindLocationContainer;
