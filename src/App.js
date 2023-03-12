import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/nav-bar.component.jsx";
import Pricing from "./components/pricing.component.jsx";
import Hero from "./components/hero/hero.component";
import Form from "./components/form/form.component";
import Footer from "./components/footer/footer.component";
import Feature from "./components/features/features";



function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Hero />
      <Feature />
      <Pricing />
      <Form />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
