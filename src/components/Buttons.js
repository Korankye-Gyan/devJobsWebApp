import * as React from 'react';
import {Box,Button} from '@mui/material';

export default function Buttons({name,onClick,}) {
  return (
    <Box >
      <Button variant="contained" 
       sx={{ textTransform: 'none',
       backgroundColor:'#5964E0'
       }}
       onClick={onClick}
      >
        {name}
      </Button>
    </Box>
  );
}