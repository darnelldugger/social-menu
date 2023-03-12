import { Container, Grid, CardMedia, Typography } from "@mui/material";
import phoneImg from "../../assets/image-hero-landscape@2x.webp";
import { ReactComponent as Curve } from "../../assets/pattern-curved-line-1.svg";
import ButtonPrimary from "../buttons/button-primary.component";
import "./hero.styles.css";
import heroImage from "../../assets/image-hero-portrait@2x.webp";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "50px" } }}>
      <Grid container>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{
            marginBottom: { xs: "50px", sm: "100px", md: "50px" },
            padding: { md: "80px 0", sm: "20px 0" },
            backgroundImage: { xs: "none", sm: `url(${heroImage})` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: { sm: "400px", md: "404px" },
          }}
        >
          <div className="hero-svg">
            <Curve />
          </div>

          <Typography
            variant="h1"
            color= 'text.alert'
            sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' }, fontSize: { xs: "38px", sm: "46px", md: "62px" } }}
          >
            Integrating <strong>social media</strong> <br /> with
            <strong> restaurant menus.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="subtitle1" color= 'text.primary' sx={{ textAlign: { xs: 'center', sm: 'left', md: 'left' }, maxWidth: { xs: 460, sm: 325 }, pl: { xs: 3, sm: 0 }, pr: { xs: 3, sm: 0 } }}>
              Social menu is the new way to drive engagement and interactivity while search goers are on your menu. We pride ourselves in making it easier for you to add photos of your dishes. Intergrating the best parts of social media with a menu your patrons would love.{" "}
            </Typography>
          </div>
          <ButtonPrimary  />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={phoneImg} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={1.5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { md: "100px 0" } }}
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              94%
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              more views when menus have photos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              84%
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              communication is visual, so is the appetite
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              4.74B
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              people are on social media
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero
