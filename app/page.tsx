import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
