import React from 'react';
import {useState} from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Navbar from './Navbar';
import Stat from './Stat';
import  home from '../css/home.css'
const Homes = () => {
    return (
    <div className="bodyh host_version"> 
        <div id="carouselExampleIndicators" className="carousel slide bs-slider box-slider" data-ride="carousel" data-interval="2000" style={{backgroundColor: "black"}}>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                
                
      <div className="carousel-item active">
      <Carousel img1={'https://www.studying-in-germany.org/wp-content/uploads/2016/07/Getting-a-masters-degree-in-Germany.jpg'} alt1={'First Slide'} heading1={'Learn To Thrive Training Centre'} content1={'We provide you with the best courses along with experienced tutors.'} />   
      </div>
      <div className="carousel-item">
      <Carousel img1={'https://www.kmslh.com/wp-content/uploads/2018/05/Why-to-Apply-Knowledge-Management-to-the-Insurance-Industry.jpg'} alt1={'Second Slide'} heading1={'Industrial Knowledge'} content1={'By the end of the courses, you will be ready to excell in the corporate world.'} />   
          </div>
          <div className="carousel-item">
      <Carousel img1={'https://blog.originlearning.com/wp-content/uploads/2016/09/learning-components-og.png'} alt1={'Third Slide'} heading1={'Passion For Learning'} content1={'Our tutors teach in a creative way such that your interest and passion for that particular domain increases.'} />   
          </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div id="overviews" className="section wb">
            <div className="container containerh">
                <div className="section-title row text-center">
                   <div className="col-md-8 offset-md-2">
                        <h3 className={"hh hh3"}>Motto and Agenda</h3>
                        <p className={"phead"} className="lead">Our motto is "Commitment to Excellence". We teach in the best way possible and ensure that you will learn a lot after the courses are completed. There will also be assignments everyday, so you can practice what you've learned consistently.</p>
                    </div>
                </div>
    
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h2 className={"hh hh2"}>Start from scratch</h2>
                            <br></br>
                            <br></br>
                            <h3 className={"hh hh3"}>Want to learn something absolutely new? </h3>
                            <br></br>
                            <h3 className={"hh hh3"}>An open mind is the best place to build a palace! Every course covers the subject from basics.</h3>

                        
                         </div>
                    </div>
				
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="https://media.istockphoto.com/photos/leadership-and-career-development-concept-picture-id1182326712?k=6&m=1182326712&s=612x612&w=0&h=RFL5EH9yPZGuYCWZFTC99LGmINq4W81nKEPBxqB7ZUo=" alt="" className="img-fluid img-rounded"></img>
                        </div>
                    </div>
			    </div>
			    <div className="row align-items-center">
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="https://image.shutterstock.com/image-vector/certificate-symbol-on-yellow-backgroundclean-260nw-227773747.jpg" alt="" className="img-fluid img-rounded"></img>
                        </div>
                    </div>
        
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h2 className={"hh hh2"}>Certificate on completion</h2>
                            <br></br>
                            <br></br>
                            <h3 className={"hh hh3"}>Recognized Certificates to give your resume an edge.</h3>
                            <br></br>
                            <h3 className={"hh hh3"}> A blue-chip credential to enter your field with. </h3>

                        
                        </div>
                    </div>
				
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h2 className={"hh hh2"}>Mentorship and Coaching</h2>
                            <br></br>
                            <br></br>
                            <h3 className={"hh hh3"}>Industry expert to guide you through the course and share their experience with you. </h3>
                            <br></br>
                            <h3 className={"hh hh3"}>Gain a friend in field and coach for life.</h3>

                        
                        </div>
                    </div>
				
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/52b96fe/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F79%2F81%2F970c57febcbb0f6e93a1384a5dc0%2Fmentoring.jpg" alt="" className="img-fluid img-rounded"></img>
                        </div>
                    </div>
			    </div>
                <div className="row align-items-center">
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                            <img src="https://miro.medium.com/max/4800/1*62GJBXP7cikAdwCBiiI7ug.jpeg" alt="" className="img-fluid img-rounded"></img>
                        </div>
                    </div>
				
				    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                            <h2 className={"hh hh2"}>Build Projects</h2>
                            <br></br>
                            <br></br>
                            <h3 className={"hh hh3"}> There are Internships, projects and practical teaching methods.</h3>
                            <br></br>
                            <h3 className={"hh hh3"}>They help you become instantly employable and desirable by top companies. </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
   
	    <div className="section cl">
		    <div className="container containerh" style={{backgroundColor: "#eea412", color: "white"}}>
			    < div className="row text-left stat-wrap"> 
                    <div className="col-md-4 col-sm-4 col-xs-12">
					<span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-study"></i></span>
                    <Stat cl={'flaticon-study'} count={'5000'} content={'Students'}/>
                    </div>
                    < div className="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-online"></i></span>
                    <Stat cl={'flaticon-online'} count={'150'} content={'Courses'}/>
                    </ div>
                    < div className="col-md-4 col-sm-4 col-xs-12">
                    <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-years"></i></span> 
                    <Stat cl={'flaticon-years'} count={'20'} content={'Years Completed'}/>
                    </div>
			    </div>
		    </div>
	    </div>

    
    
        <div className="parallax section dbcolor">
            <div className="container containerh">
                <h1 className={"hh hh1"} style={{ textAlign:"center", marginBottom: "20px"}}>Sponsors</h1>
                <div className="row logos">
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="https://digistep.in/wp-content/uploads/2016/07/chippy.jpg" alt="" className="img-repsonsive"></img>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="data:image/png;base64,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" alt="" className="img-repsonsive"></img>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="" className="img-repsonsive"></img>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="https://logodix.com/logo/1330708.png" alt="" className="img-responsive" style={{height: "120px"}}></img>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="https://logodix.com/logo/14591.jpg" alt="" className="img-repsonsive" style={{height: "120px"}}></img>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <img src="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"  alt="" className="img-repsonsive" ></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Homes;
