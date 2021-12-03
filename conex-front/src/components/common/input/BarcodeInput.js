import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Backspace from '@mui/icons-material/Backspace';

const BarcodeTextField = ({
  id,
  label,
  value,
  setValue,
  onChange,
  textValue,
  addToRefs,
}) => {
  const onDeleteClick = (e) => {
    setValue(id, '');
  };

  const onKeyPress = (e) => {
    if (e.target.value === null) return;

    if (e.charCode === 13 || e.code === 'Enter') {
      const barcodeValue = getBarcode(e.target.value);
      setValue(id, barcodeValue);
    }
  };

  const isExistValue = () => {
    if (value !== null && value !== undefined && value !== '') {
      return true;
    }

    return false;
  };

  const getBarcode = (barcode) => {
    if (barcode === null) return '';

    const arr = barcode.toString().trim().split('|');
    if (arr.length === 3) {
      return arr[0];
    } else {
      return barcode;
    }
  };

  return (
    <TextField
      id={id}
      variant="standard"
      label={label}
      onKeyPress={onKeyPress}
      onChange={onChange}
      fullWidth
      required
      helperText={label + ' 입력'}
      inputRef={addToRefs}
      value={textValue}
      InputProps={{
        readOnly: isExistValue(),
        endAdornment: (
          <>
            {isExistValue() ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={onDeleteClick}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  size="small"
                >
                  <Backspace />
                </IconButton>
              </InputAdornment>
            ) : null}
          </>
        ),
      }}
    />
  );
};

export default BarcodeTextField;
