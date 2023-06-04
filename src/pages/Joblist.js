import React, { useState, useEffect } from 'react';
import { Box, InputBase, Checkbox, FormControlLabel, IconButton,List,ListItem,Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "../components/Buttons";
import Job from '../components/Job';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Joblist = () => {
  const [visibleCards, setVisibleCards] = useState(6); //Number of initial visible cards
  const [jobs, setJobs] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  useEffect(() => {
    fetch("/data.json") // fetch the JSON data from the public URL path
      .then(response => response.json())
      .then(data => setJobs(data)); // set the state with the fetched data
  }, []);

  const loadMore = () => {
    setVisibleCards(preVisibleCards => preVisibleCards + 4);
  };

  const filteredJobs = jobs.filter(job =>
    (job.position || '').toLowerCase().includes(searchFilter.toLowerCase()) &&
    (job.location || '').toLowerCase().includes(locationFilter.toLowerCase()) &&
    (!fullTimeOnly || job.contract === 'Full Time')
  );

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom:'50px',
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
            position:'absolute', // To position search bar on header
            marginTop:'-60px'    // To position search bar on header
          }}
        >
          <Box>
            <IconButton sx={{ p: '10px'}} aria-label="location">
              <SearchIcon sx={{ color: '#5964E0',
                                display:{
                                  xl:'flex',
                                  lg:'flex',
                                  md:'flex',
                                  sm:'none',
                                  xs:'none' 
                                },
                              }} />
            </IconButton>
            <InputBase
              id="search"
              placeholder="Filter by title, companies, expertise..."
              sx={{ width: {lg:'270px',md:'240px',sm:'260px',xs:'260px'}, }}
              value={searchFilter}
              onChange={event => setSearchFilter(event.target.value)}
            />
            <IconButton sx={{ p: '10px' }} aria-label="location">
              <FilterAltOutlinedIcon sx={{ 
                                   display:{
                                    xl:'none',
                                    lg:'none',
                                    md:'none',
                                    sm:'flex',
                                    xs:'flex' 
                                            },
                                     }} />
            </IconButton>
            <IconButton sx={{ p: '10px' }} aria-label="location">
              <SearchIcon sx={{ backgroundColor: '#5964E0',
                                color:'#ffffff',
                                padding:'4px',
                                display:{
                                  xl:'none',
                                  lg:'none',
                                  md:'none',
                                  sm:'flex',
                                  xs:'flex' 
                                },
                                borderRadius:'5px'
                              }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
              paddingLeft: '2px',
              marginLeft: '8px',
              display:{
                xl:'block',
                lg:'block',
                md:'block',
                sm:'none',
                xs:'none'
              },
            }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="location">
              <LocationOnIcon sx={{ color: '#5964E0' }} />
            </IconButton>

            <InputBase
              id="location"
              placeholder="Filter by location..."
              sx={{ width: {lg:'250px',md:'200px',sm:'200',xs:'150px'}, }}
              value={locationFilter}
              onChange={event => setLocationFilter(event.target.value)}
            />
          </Box>
          <Box
            sx={{
              borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
              paddingLeft: '20px',
              gap:'1rem',
              display:{
                xl:'flex',
                lg:'flex',
                md:'flex',
                sm:'none',
                xs:'none'
              },
            }}
          >
            <FormControlLabel
             sx={{ width: {lg:'250px',md:'150px',sm:'100px',xs:'50px'}, }}
              control={
                <Checkbox
                  checked={fullTimeOnly}
                  onChange={event => setFullTimeOnly(event.target.checked)}
                />
              }
              label="Full Time Only"
            />
            <Button name="Search" onClick={() => setJobs(filteredJobs)} />
          </Box>
        </Paper>
      </Box>
      <List>
        <ListItem
         sx={{
          display:'flex',
          justifyContent:'center',
          gap:'3rem',
          flexWrap:'wrap'}}>
          {
           filteredJobs.slice(0,visibleCards).map(job=><Job job={job} key={job.id}/>)
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
        
        { visibleCards < filteredJobs.length &&(
          <Button name= 'Load More' onClick={loadMore}/>
        )
      }  
      </Box>  
    </>
  )
}

export default Joblist;