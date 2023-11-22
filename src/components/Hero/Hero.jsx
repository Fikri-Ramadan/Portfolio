import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src="./images/Vector 187.svg" className="vector" alt="" />
        <p className="name">Hello, I am Fikri</p>
        <div className="job-title">
          <p>Software</p>
          <p>Engineer</p>
        </div>
        <a href="mailto:fikriramadan.tech@gmail.com" className="button">
          <i className="fa-regular fa-envelope"></i> Email Me
        </a>
      </div>
      <div className="hero-right">
        <div className="img-container">
          <img src="./src/assets/profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
