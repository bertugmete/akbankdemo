import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Navbar({title}){

    return(
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
        <a href="/" className="navbar-brand">{title}</a>
  
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to = "/" className = "nav-link">Home</Link>
            </li>
            <li className="nav-item active">
                <Link to = "/about" className = "nav-link">About</Link>
            </li>
            <li className="nav-item active">
                <Link to = "/products" className = "nav-link">Products</Link>
            </li>
            <li className="nav-item active">
                <Link to = "/add" className = "nav-link">Add Product</Link>
            </li>
        
        </ul>
      
      </nav>

    )

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Demo App'
}

export default Navbar;