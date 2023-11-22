import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
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
  );
};

export default Footer;
