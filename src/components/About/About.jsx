import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src="./src/assets/Vector 67.svg" className="about-vector" alt="" />
        <img src="./src/assets/lightbulb.svg" className="about-vector" alt="" />
        <img
          src="./src/assets/Vector 186.svg"
          className="about-vector"
          alt=""
        />
        <p className="title">
          About <span>me</span>
        </p>
        <p className="description">
          Hello there! I&apos;m Fikri, a passionate and innovative software
          engineer on a mission to make a positive impact through elegant and
          efficient code. With a blend of creativity and analytical prowess, I
          bring a fresh perspective to the ever-evolving landscape of
          technology.
        </p>
        <p className="description">
          Programming Language: Java, Javascript, Typescript, Golang, HTML/CSS.
        </p>
        <p className="description">
          Tech/FrameWork/Library: NextJS, ReactJS, ExpressJS, Gin, Spring Boot,
          Tailwind CSS.
        </p>
      </div>

      <div className="about-right">
        <div className="vector-container">
          <img src="./src/assets/doodles mixed round.svg" alt="" />
          <img src="./src/assets/Group 62.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
