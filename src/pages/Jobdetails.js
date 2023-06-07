import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

const Jobdetails = () => {
  const { jobId } = useParams();
  const [jobsData, setJobsData] = useState([]);
   
  //  useEffect(() => {
  //   fetch('/data.json')
  //     .then((response) => response.json())
  //     .then((data) => setJobsData(data));
  // }, []);
   

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to verify if it is fetched correctly
        setJobsData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const currentJobPage = jobsData.find((jobData) => jobData.id === Number(jobId));

  const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      •
    </Box>
  );

  return (
    <>
      {currentJobPage && (
        <>
        <motion.main
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ ease: 'easeInOut' }}
        >
          <Box sx={{
             margin: '0 60px',
              position: 'relative', 
              marginTop: '-70px'}}>
            <Card>
              <Box
                sx={{
                  display: {
                    xl: 'flex',
                    lg: 'flex',
                    md: 'flex',
                    sm: 'block',
                    xs: 'block',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor:currentJobPage.logoBackground,
                    width: '100px',
                    hight: '90px',
                    padding: '10px',
                  }}
                >
                  <img
                    src={currentJobPage.logo}
                    style={{ width: '50px', height: '50px' }}
                    alt="logo"
                    onLoad={() => console.log('Image loaded:', currentJobPage.logo)}
                    onError={() => console.log('Image failed to load:', currentJobPage.logo)}
                  />
                </Box>
                <Box sx={{ padding: '30px 20px' }}>
                  <Typography variant="h5" component="div">
                    {currentJobPage.company}
                  </Typography>
                  <Box
                    sx={{
                      display: {
                        xl: 'flex',
                        lg: 'flex',
                        md: 'flex',
                        sm: 'block',
                        xs: 'block',
                      },
                      gap: {
                        sx: '5rem',
                        sm: '10rem',
                        md: '25rem',
                        lg: '39rem',
                        xl: '49rem',
                      },
                    }}
                  >
                    <Box color="text.secondary">{currentJobPage.website}</Box>
                    <Box>
                    <Buttons name="Company Site" onClick={() => window.open(currentJobPage.website, '_blank')} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card sx={{ margin: '30px 0', padding: '50px' }}>
              <CardContent>
                <Box>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                   {currentJobPage.postedAt}
                     {bull}
                    {currentJobPage.contract}
                  </Typography>
                  <Box
                    sx={{
                      display: {
                        xl: 'flex',
                        lg: 'flex',
                        md: 'flex',
                        sm: 'block',
                        xs: 'block',
                      },
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="h4" component="div">
                      {currentJobPage.position}
                    </Typography>
                    <CardActions>
                     <Buttons name="Apply Now" onClick={() => window.open(currentJobPage.website, '_blank')} />
                    </CardActions>
                  </Box>
                  <Button
                    size="small"
                    sx={{
                      textTransform: 'none',
                      color: '#5964E0',
                      paddingBottom: '5px',
                    }}
                  >
                    {currentJobPage.location}
                  </Button>
                </Box>
                <Typography variant="p" component="div">
                  {currentJobPage.description}
                </Typography>
                <Typography sx={{ margin: '15px 0' }} variant="h5" component="div">
                  Requirements
                </Typography>
                <Typography variant="p" component="div">
                  {currentJobPage.requirements?.content}
                </Typography>
                <Typography variant="p" component="div">
                  {currentJobPage.requirements?.items?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Typography>
                <Typography sx={{ margin: '15px 0' }} variant="h5" component="div">
                  WHAT YOU WILL DO
                </Typography>
                <Typography variant="p" component="div">
                  {currentJobPage.role?.content}
                </Typography>
                <Typography variant="p" component="div">
                <ol>
                    {currentJobPage.role?.items?.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
               </ol>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          </motion.main>
          <motion.footer>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Box>
                <Typography variant="h4" component="div">
                  {currentJobPage.position}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {currentJobPage.company}
                </Typography>
              </Box>
              <CardActions>
              <Buttons name="Apply Now" onClick={() => window.open(currentJobPage.website, '_blank')} />
              </CardActions>
            </CardContent>
          </Card>
          </motion.footer>
        </>
      )}
    </>
  );
};

export default Jobdetails;
