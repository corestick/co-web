import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LocationList from './LocationList';
import BarcodeInput from '../../components/common/input/BarcodeInput';

const FindLocation = ({
  onClick,
  onBarcodeChange,
  values,
  setValue,
  textValue,
  storedPlace,
  addToRefs,
}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: '1vh',
        height: '90vh',
      }}
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '95%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <BarcodeInput
          id="barcode"
          label="품목코드"
          value={values.barcode}
          setValue={setValue}
          onChange={onBarcodeChange}
          textValue={textValue}
          addToRefs={addToRefs}
        />

        <Button id="btnFind" variant="outlined" onClick={onClick}>
          찾기
        </Button>
        <LocationList data={storedPlace}></LocationList>
      </Box>
    </Container>
  );
};

export default FindLocation;
