import React from "react";

const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-0 d-flex flex-row justify-content-center">
      <div id="titulo" className="">
          <a className="navbar-brand fw-bold" href="/">
            {brand}
          </a>
        </div>
        <div className="">
        <a  href="https://devgallardo.netlify.app/"
            rel="noreferrer"
            target="_blank"
            className="home__social-icon text-info"
          >
            <i className="uil uil-user-circle p-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lautagallardogg/"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon linkedinxd text-info"
          >
            <i className="uil uil-linkedin p-2"></i>
          </a>
          <a
            href="https://github.com/speedbuild98"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon"
          >
            <i className="uil uil-github-alt p-2 text-info"></i>
          </a>
          <a
            href="https://cafecito.app/speedbuild"
            target="_blank"
            rel="noreferrer"
            className="home__social-icon"
          >
            <i className="uil uil-coffee p-2 text-info"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


