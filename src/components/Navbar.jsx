import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
       
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to ={'/add'} className="nav-link" >Add book</Link>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default Navbar;
