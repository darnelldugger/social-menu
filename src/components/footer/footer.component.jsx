import { Container, Grid, Typography, Link, Divider } from "@mui/material";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg" >
        <Divider variant="middle" sx={{ mb: 6}} />
        <Grid
          container
          rowSpacing={4}
          sx={{
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Grid item xs={3.5}>
          <img
                src="https://res.cloudinary.com/nell1818/image/upload/v1678603710/MENUUI_6_o6upjt.png"
                height={30}
                alt="logo"
              />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="body1">Copyright - 2023</Typography>
          </Grid>
          <Grid item container xs={8} sm={2} sx={{ textAlign: "center" }}>
            <Grid item xs={4}>
              <Link href="#">
                <Facebook />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="#">
                <Twitter />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="#">
                <Instagram />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
