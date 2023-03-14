import "./App.css";
import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/nav-bar.component.jsx";
import HowItWorks from "./components/how-it-works.component.jsx";
import ProductExp from "./components/product-exp.component.jsx";
import Hero from "./components/hero/hero.component";
import Form from "./components/form/form.component";
import Footer from "./components/footer/footer.component";
import Feature from "./components/features/features";



function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Hero />
      <ProductExp />
      <Feature />
      <HowItWorks />
      <Form />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
