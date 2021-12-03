import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BarcodeInput from '../common/input/BarcodeInput';
import NumberInput from '../common/input/NumberInput';

const RackInOut = ({
  type,
  useLotNo,
  onClick,
  onBarcodeChange,
  values,
  setValue,
  textValues,
  addToRefs,
}) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: '1vh',
        height: '80vh',
        //bgcolor: '#eeffee',
      }}
    >
      <Box
        component="form"
        sx={{
          //bgcolor: '#fff123',
          '& > :not(style)': { m: 1, width: '95%' },
        }}
        noValidate
        autoComplete="off"
      >
        <BarcodeInput
          id="serialNo"
          label="바코드"
          value={values.serialNo}
          setValue={setValue}
          onChange={onBarcodeChange}
          textValue={textValues.serialNo}
          addToRefs={addToRefs}
        />
        {type === '출고' && useLotNo ? (
          <BarcodeInput
            id="lotNo"
            label="Lot No."
            value={values.lotNo}
            setValue={setValue}
            onChange={onBarcodeChange}
            textValue={textValues.lotNo}
            addToRefs={addToRefs}
          />
        ) : null}

        <NumberInput
          id="qty"
          label="수량"
          value={values.qty}
          setValue={setValue}
          addToRefs={addToRefs}
        />

        <Button id="btnInOut" variant="outlined" onClick={onClick} fullWidth>
          {type}
        </Button>
      </Box>
    </Container>
  );
};

export default React.memo(RackInOut);
