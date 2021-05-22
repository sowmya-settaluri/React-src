import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../css/navbar.css'

class Footer extends React.Component{
    render(){
        return (
<div>

<footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="widget clearfix">
                        <div className="widget-title">
                            <h3>Social media links</h3>
                        </div>
                        <p>Do follow us on our social medial links</p>
						<div className="footer-right">
							<ul className="footer-links-soi">
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-github"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
							</ul>
						</div>						
                    </div>
                </div>


				<div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="widget clearfix">
                        <div className="widget-title">
                            <h3>Information Link</h3>
                        </div>
                        <ul className="footer-links">
                            <li><Link to="/"><a >Home</a></Link></li>
                            <li><Link to="blog"><a >Blog</a></Link></li>
                            <li><Link to="/gallery"><a>Gallery</a></Link></li>
                            <li><Link to="/services"><a href="service.html">Services</a></Link></li>
                            <li><Link to="/pricing"><a>Pricing</a></Link></li>
							<li><Link to="/aboutus"><a >About us</a></Link></li>
							
                        </ul>
                    </div>
                </div>
				<div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="widget clearfix">
                        <div className="widget-title">
                            <h3>Courses</h3>
                        </div>

                        <ul className="footer-links">
                            <li><a href="#">Android app development</a></li>
                            <li><a href="#">Full stack development</a></li>
                            <li><a href="#">Data Science</a></li>
                            <li><a href="#">Artificial Intelligence</a></li>
                            <li><a href="#">Many more</a></li>
                        </ul>
                    </div>
                </div>
		
                
				
            </div>
        </div>
    </footer>

    <div className="copyrights">
        <div className="container">
            <div className="footer-distributed">
                <div className="footer-center">                   
                    <p className="footer-company-name">All Rights Reserved. Learn to thrive institute.</p>
                </div>
            </div>
        </div>
    </div>
    
    

</div> 
        );
    }
}

export default Footer;