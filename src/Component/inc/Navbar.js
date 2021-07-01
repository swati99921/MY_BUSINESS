import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid" >
                <Link to="/" className="navbar-brand text-white" >Bookstore.in</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/aboutus" className="nav-link text-white">Aboutus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/register" className="nav-link text-white">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/bestseller" className="nav-link text-white">Best Seller</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/login" className="nav-link text-white">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/useEffectApi" className="nav-link text-white">API</Link>
                        </li>
                       
                       
                    </ul>
                </div>
            </div>

        </nav>
  
    );

}
export default Navbar;
