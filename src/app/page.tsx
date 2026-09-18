import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Home from "@/components/home/Home";
import Project from "@/components/home/Project";
import Skills from "@/components/home/Skills";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}