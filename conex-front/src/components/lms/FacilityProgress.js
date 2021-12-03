import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { green, orange } from '@mui/material/colors';
import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import Paper from '@mui/material/Paper';

const FacilityProgress = ({ dataRow, idx }) => {
  return (
    <>
      <Paper sx={{ p: 0.5, height: '100%', bgcolor: '#121D5C' }}>
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="white" variant="h6">
              {dataRow.FacilityNo}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                backgroundColor:
                  dataRow.StatusValue === 1 ? green[300] : orange[300],
                height: 30,
                width: 30,
              }}
            >
              <PrecisionManufacturing />
            </Avatar>
          </Grid>
        </Grid>
        <Box>
          <Typography color="white">{dataRow.WorkRate}%</Typography>
          <LinearProgress value={dataRow.WorkRate} variant="determinate" />
        </Box>
      </Paper>
    </>
  );
};

export default FacilityProgress;
