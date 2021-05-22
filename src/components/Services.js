import React from 'react'
import services from '../css/services.css'
import {FaDesktop} from 'react-icons/fa'
import Footer from './Footer'
import Navbar from './Navbar'
class Services extends React.Component{
    render(){
      return( 
        <div className="bodyser">
           <div className="container">
             <div className="services">
              <h1 className="h1s">Our services </h1>
           </div>
               <div className="row">
                <div className="col-md-4 class1  text-center">

                 <div className="icon" >
                  <a className="a1" href="#" style={{color: "white"}}><i className="fas fa-desktop fa-3x"></i></a>
                 </div> 
                    <h3>Web Development</h3>
                    <p>Learn To Thrive is the best Institute in the city
                    to improve your web developing skills and for a beginner<br/>
                    to start learning it.</p>
              </div>
              <div className="col-md-4 class1  text-center">

                  <div className="icon" >
                    <a className="a1" href="#" style={{color: "white"}}><i className="fas fa-mobile-alt fa-3x"></i></a>
                  </div> 
                     <h3>App Development</h3>
                     <p>The best platform to start learning and to upgrade your app developing is our Institute
                          </p>
              </div>
               <div className="col-md-4 class1  text-center">

                  <div className="icon">
                      <a className="a1" href="#" style= {{color: "white"}}><i className="fas fa-tasks fa-3x"></i></a>
                  </div> 
                     <h3>Daily Tasks</h3>
                     <p>Tasks will be given everyday to improve your developing skills and boost up your developing knowledge. </p>
               </div>
               <div className="col-md-4 class1 text-center">

                  <div className="icon" >
                      <a className="a1" href="#" style={{color: "white"}}><i className="fas fa-users fa-3x"></i></a>
                  </div> 
                     <h3>Worshops</h3>
                     <p>We conduct workshops with well trianed trainers and with proper planning,preparation and implementation.
                         We follow up with participants to get feedback om the worshop.</p>
               </div>
               <div className="col-md-4 class1 text-center">

                  <div className="icon">
                      <a className="a1" href="#" style={{color: "white"}}><i className="fas fa-caret-up fa-3x"></i></a>
                  </div> 
                     <h3>Online Training</h3>
                     <p>We offer most of the course online with virtual classroomto serve the IT aspirants</p>
               </div>
               <div className="col-md-4 class1 text-center">

                  <div className="icon">
                      <a className="a1" href="#" style={{color: "white"}}><i className="fas fa-cubes fa-3x"></i></a>
                  </div> 
                     <h3>Corporate Training</h3>
                     <p>We have experienced faculty to train professionals for improving their technology skills to day to day needs.</p>
               </div>
          </div>
        </div>
        </div>
      )
    }
    
}
export default Services