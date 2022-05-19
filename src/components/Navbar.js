import React from "react";


const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark mt-0'>
        <div className='container'>
          <a className='navbar-brand' href="/">{brand}</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;


