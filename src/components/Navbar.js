import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux"
import cart from '../reduce/cart';

const Navbar = ({  }) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Cinema</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">Search
                    <span class="text-light badge bg-primary rounded-circle ml-1">
                                Detail desc
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar;