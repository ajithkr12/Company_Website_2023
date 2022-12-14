import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../images/logo/logo.png';
const NavBar = () =>  {
 
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div className="navarea">
			<nav className="navbar">
				<Link to="/" className="nav-logo">
					<img src={Logo} alt="Logo"/>
				</Link>
				<div onClick={handleClick} className="nav-icon">
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? 'nav-links active' : 'nav-links'}>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link" onClick={closeMenu}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/blogs" className="nav-link" onClick={closeMenu}>
							Blogs
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
  	);}
export default NavBar;