import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../css/navbar.css'


const Navbar = () => {
    return (
		<div>
	<header className="top-navbar">
        <div id="preloader">
		<div className="loader-container">
			<div className="progress-br float shadow">
				<div className="progress__item"></div>
			</div>
		</div>
	</div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="index.html">
					<img src="data:image/png;base64,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" alt="logo" height="80" width="200" />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbars-host">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><Link to='/'><a className="nav-link">Home</a></Link></li>
						<li className="nav-item"><Link to="/aboutus"><a className="nav-link" >About Us</a></Link></li>
						<li className="nav-item">
							<Link to="/courses"><a className="nav-link">Courses </a></Link>
						</li>
						<li className="nav-item">
							<Link to="/blog"><a className="nav-link" >Blog </a></Link>
						</li>
						<li className="nav-item"><Link to="/gallery"><a  className="nav-link">Gallery</a></Link></li>
						<li className="nav-item"><Link to="/services"><a className="nav-link" >Services</a></Link></li>

						<li className="nav-item"><Link to='/pricing'><a className="nav-link">Pricing</a></Link></li>
						
					</ul>
					<ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login"><a className="hover-btn-new log orange"  ><span>Sign in</span></a></Link></li>
                    </ul>
				</div>
			</div>
		</nav>
	</header>
	</div>
    )
}

export default Navbar
