import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FacilityProgress from './FacilityProgress';
import FacilityText from './FacilityText';
import FacilityOther from './FacilityOther';

const FacilityStatus = ({ facilityStatusData, dateTime }) => {
  return (
    <Box
      sx={{
        bgcolor: '#606060',
        height: '100vh',
        p: 1,
        //position: 'absolute',
        overflow: 'hidden',
      }}
    >
      <Box display="flex" color="white" justifyContent="right">
        {dateTime.toLocaleString()}
      </Box>
      {facilityStatusData !== null && (
        <Grid
          container
          sx={{
            p: 1,
            gap: 0.5,
            display: 'grid',
            bgcolor: '#666666',
            gridAutoColumns: '1fr',
            gridAutoRows: 'minmax(50px, auto)',
          }}
        >
          {facilityStatusData.data.map((row, index) => {
            return (
              <Grid
                item
                key={index}
                sx={{
                  gridColumn: row.L + ' / ' + row.R,
                  gridRow: row.T + ' / ' + row.B,
                }}
              >
                {row.ContentsType === 'Other' ? (
                  <FacilityOther dataRow={row} idx={index} />
                ) : row.ContentsType === 'Area' ? (
                  <FacilityText dataRow={row} idx={index} />
                ) : (
                  <FacilityProgress dataRow={row} idx={index} />
                )}
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default FacilityStatus;
