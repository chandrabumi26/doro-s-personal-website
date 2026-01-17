import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollNav from "./components/ScrollNav";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollNav />
      <main className="scroll-snap-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </main>
    </>
  );
}
