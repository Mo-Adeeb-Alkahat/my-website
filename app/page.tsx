import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main >
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </main>
  );
}
