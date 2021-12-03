import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const FacilityText = ({ dataRow, idx }) => {
  return (
    <>
      <Paper
        sx={{
          p: 0.5,
          bgcolor: '#222222',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography align="center" color="white">
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
    </>
  );
};

export default FacilityText;
