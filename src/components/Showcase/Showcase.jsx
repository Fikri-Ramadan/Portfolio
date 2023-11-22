import './Showcase.css';

const Showcase = () => {
  return (
    <div className="project" id='project'>
      <img
        src="./deadlines.svg"
        className="project-vector"
        id="vector1"
        alt=""
      />
      <p className="title">
        My Recent <span>Projects</span>
      </p>
      <div className="project-container">
        <a
          href="https://fikri-jobtracker.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-item">
            <div className="project-img-container">
              <img src="./job-tracker.png" alt="" />
              <div className="project-description">
                <p className="title">Job Tracker</p>
                <p className="tech">
                  Tech: React, Express, MongoDB, React Query
                </p>
                <p className="description">
                  Personal Job Tracker is a cutting-edge online platform
                  designed to empower job seekers like you in managing every
                  aspect of your job applications.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://techinfo.vercel.app" target="_blank" rel="noreferrer">
          <div className="project-item">
            <div className="project-img-container">
              <img src="./tech-info.png" alt="" />
              <div className="project-description">
                <p className="title">Tech Info</p>
                <p className="tech">Tech: NextJS, MongoDB, Prisma, NextAuth</p>
                <p className="description">
                  Tech Info, your go-to destination for all things tech-related!
                  Our mission is to keep you informed, inspired, and engaged in
                  the ever-evolving world of technology.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://fikri-realestate.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-item">
            <div className="project-img-container">
              <img src="./real-estate.png" alt="" />
              <div className="project-description">
                <p className="title">Real Estate</p>
                <p className="tech">
                  Tech: React, Express, MongoDB, Prisma, Auth0, React Query
                </p>
                <p className="description">
                  project designed to streamline and enhance the real estate
                  booking process, revolutionizing the way individuals find,
                  schedule properties.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Showcase;
