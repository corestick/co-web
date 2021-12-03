import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const FacilityOther = ({ dataRow, idx }) => {
  return (
    <>
      <Paper
        sx={{
          bgcolor: '#333333',
          height: '100%',
          p: 0.5,
        }}
      >
        <Paper
          sx={{
            p: 0.1,
            bgcolor: '#dddddd',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography align="center" color="textPrimary">
            {dataRow.ContentsText.split('\\n').map((lineText, index) => {
              return (
                <span key={index}>
                  {lineText}
                  <br />
                </span>
              );
            })}
          </Typography>
        </Paper>
      </Paper>
    </>
  );
};

export default FacilityOther;
