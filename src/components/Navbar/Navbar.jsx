import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">
        {' '}
        Fikri Ramadan{' '}
      </a>
      <div className="links">
        <a href="/" className="link">
          Home
        </a>
        <a href="#about" className="link">
          About Me
        </a>
        <a href="#project" className="link">
          My Project
        </a>
        <a href="mailto:fikriramadan.tech@gmail.com">
          <i className="fa-regular fa-envelope icons"></i>
        </a>
        <a
          href="https://www.instagram.com/_fikri_ramadan_"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram icons"></i>
        </a>
        <a
          href="https://www.github.com/Fikri-Ramadan"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github icons"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
