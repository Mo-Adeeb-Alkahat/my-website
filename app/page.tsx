import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  
  return (
    <main >
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Technologies></Technologies>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
      
    </main>
  );
}
