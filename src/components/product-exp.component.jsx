import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex', p: { xs: 0 } }}>
      <Grid container sx={{ m: 0 }} >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/nell1818/image/upload/v1678715683/Untitled_design_30_n5npk1.png"
            alt="call to action"
      
            sx={{

              width: '100%',
              
              borderRadius: { xs: 0, md: 1 }
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              py: 1,
              px: 1,
              borderRadius: 1,
              backgroundColor: 'white'
            }}
          >
            <Box component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 400,
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center'
              }}>
              <Typography variant="h2" component="h2" gutterBottom textAlign='center'
                sx={{ fontSize: { xs: '28px', md: '40px' } }}
              >
                Your menu everywhere diners are searching
              </Typography>
              <Typography  textAlign='center'>
                With the traffic from search sites, our platform powers your menu to have it's own reviews, comments, shares and likes.
              </Typography>
              <Container 
                sx={{  
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Box
                  component="img"
                  src="https://res.cloudinary.com/nell1818/image/upload/v1678724225/Untitled_design_36_x3ijsc.png"
                  alt="call to action"
                  sx={{
                    maxWidth: 100,
                  }}
                />
              </Container>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;