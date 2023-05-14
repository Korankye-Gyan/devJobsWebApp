import React from 'react';
import {Box, InputBase, Checkbox, FormControlLabel,IconButton,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Search = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: '4px',
          padding: '14.5px 14px',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <Box>
        <IconButton sx={{ p: '10px' }} aria-label="location">
         <SearchIcon sx={{ color: 'blue' }} />
        </IconButton>
        <InputBase          
        id="search"
        placeholder="Filter by title, companies, expertise..."
        sx={{width:'270px'}}
        />
        </Box>
        <Box
        sx={{
          borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
          paddingLeft: '14px',
          marginLeft: '14px',
        }}
        >
        <IconButton sx={{ p: '10px' }} aria-label="location">
         <LocationOnIcon sx={{ color: 'blue' }} />
        </IconButton>
      
        <InputBase
          id="location"
          placeholder="Filter by location..."
        />
        </Box>
        <Box
          sx={{
            borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
            paddingLeft: '8px',
            marginLeft: '14px',
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked />} label="Full Time Only" />
          <Button variant="contained">Search</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;