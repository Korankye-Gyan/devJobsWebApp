import React, { useState, useEffect } from 'react';
import { Box, InputBase, Checkbox, FormControlLabel, IconButton,List,ListItem,Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "../components/Buttons";
import Job from '../components/Job';




const Joblist = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/data.json") // fetch the JSON data from the public URL path
      .then(response => response.json())
      .then(data => setJobs(data)); // set the state with the fetched data
  }, []);

  return (
    <>
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Paper
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
            <SearchIcon sx={{ color: '#5964E0' }} />
          </IconButton>
          <InputBase
            id="search"
            placeholder="Filter by title, companies, expertise..."
            sx={{ width: '280px' }}
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
            <LocationOnIcon sx={{ color: '#5964E0' }} />
          </IconButton>

          <InputBase id="location" placeholder="Filter by location..." />
        </Box>
        <Box
          sx={{
            borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
            paddingLeft: '20px',
            display: 'flex',
            gap:'1rem'
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked />} label="Full Time Only" />
          <Button name= 'Search'/>
        </Box>
      </Paper>
    </Box>
    <List>
      <ListItem sx={{
        display:'flex',
        justifyContent:'center',
        gap:'1rem',
        flexWrap:'wrap'}}>
        {
         jobs.map(job=><Job job={job} key={job.id}/>)
        }
      </ListItem>
    </List>
    <Box
       sx={{display:'flex',
       alignItem:'center',
       justifyContent:'center',
       marginBottom:'20px'
      }}
    >
       <Button name= 'Load More'/>
    </Box>  
    </>
  )
}

export default Joblist