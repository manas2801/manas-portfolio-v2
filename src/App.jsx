import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      
    </>
  );
}


export default App;