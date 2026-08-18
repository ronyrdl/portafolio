import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B10] text-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;