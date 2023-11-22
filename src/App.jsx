import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          <Hero />
          <About id="about" />
          <Showcase id='project' />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
