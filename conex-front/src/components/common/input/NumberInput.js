import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Backspace from '@mui/icons-material/Backspace';

const NumberTextField = ({ id, label, value, setValue, addToRefs }) => {
  const onDeleteClick = (e) => {
    setValue(id, '');
  };

  const onChange = (e) => {
    let value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1')
      .substr(0, 15);

    if (value.substr(0, 1) === '.') value = value.substr(1);

    setValue(id, value);
  };

  const isExistValue = () => {
    if (value !== null && value !== undefined && value !== '') {
      return true;
    }

    return false;
  };

  return (
    <TextField
      id={id}
      variant="standard"
      label={label}
      onChange={onChange}
      fullWidth
      required
      type="tel"
      helperText={label + ' 입력'}
      inputRef={addToRefs}
      value={value}
      InputProps={{
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

export default NumberTextField;
