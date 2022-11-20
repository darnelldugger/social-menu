import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { AddCommentOutlined, DashboardCustomizeOutlined, EmojiEmotionsOutlined, EqualizerRounded, FilterDramaOutlined, MobileFriendlyOutlined, PeopleAltOutlined, QrCode2Outlined, RecommendOutlined, SendOutlined, SmartToyOutlined, StarBorderOutlined, SupportAgentOutlined } from '@mui/icons-material';
import { Container, Divider, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Feature() {
  return (
    <Container maxWidth="lg">
      <Divider variant='middle' />
      <Box sx={{ maxWidth: '100%', mt: 5 }}>
        <Typography
          variant="h1"
          sx={{ display: 'flex', justifyContent: 'center', mb: 5, fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
        >
          <strong> Features</strong>
        </Typography>
        <Grid container rowSpacing={{ xs: 3, sm: 6, md: 6 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          sx={{
            padding: {
              xs: "10px 5px 45px 5px",
              sm: "50px 58px",
              md: "10px 10px 160px 10px",
            },
          }}
        >
          <Grid item xs={12} md={6} lg={4} >
            <Item sx={{ minHeight: 100 }}><StarBorderOutlined color='secondary' sx={{ fontSize: '35px'}} />

              <Typography color='primary' textTransform='none' sx={{p:2}} >Review system built into the user facing menu. Own your own review system.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><EmojiEmotionsOutlined color='secondary' sx={{ fontSize: '35px' }} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Users are able to add emojis when commenting on a dish. Making it more sociable.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }}  > <AddCommentOutlined color='secondary' sx={{ fontSize: '35px' }} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Comments system built into the user facing menu. Own your own commnents system.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><MobileFriendlyOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}}>Mobile responsive. Fully responsive menu built for mobile, tablet and desktop view.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><RecommendOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Recommendations system built into the user facing menu to keep users engaged.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><DashboardCustomizeOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}}>Interactive dashboard built to help you upload photos of your dishes fast and efficiently</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><QrCode2Outlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}}>Contactless menus. Our QR code technology will help you save while being safe.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><FilterDramaOutlined color='secondary' sx={{ fontSize: '35px' }} />
              <Typography color='primary' textTransform='none' sx={{p:2}}>Hosting data in the cloud brings powerful security keeping users information safe.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><SupportAgentOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >24/7 support to help build and maintain your menu. Just add photos of your dishes.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><EqualizerRounded color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Analytics dashboard to help you understand click through rates on specific dishes.</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><SendOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Utilize cloud messaging to send pre-defined offers to yours subscribers. </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><SmartToyOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Built in machine learning to train your menu to understand user behavior for direct marketing. </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item sx={{ minHeight: 100 }} ><PeopleAltOutlined color='secondary' sx={{ fontSize: '35px'}} />
              <Typography color='primary' textTransform='none' sx={{p:2}} >Built in user authentication. Ability to sign in with Google, Facebook, Apple, email or phone number. </Typography>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}
