import React from 'react'
import  {Card, Carousel} from "../component/Blogcomp"
import details from '../component/Blogdetails'
import blog from '../css/blog.css'
//import Footer from './Footer'
//import Navbar from './Navbar'

const Blog = () => {
    function createCard(details){
        return(
          <Card img={details.img} text={details.text} ></Card>
        )
      }
    return (
        <div>
            <div class="text-block">
      <h4 className={"h4b"}><u className="bn">BLOG</u></h4>
    </div>
    <img className="ed-img" src="https://image.freepik.com/free-photo/optimistic-message-back-school_1134-378.jpg" alt="image" />
   
<Carousel></Carousel>
<div class="album py-5" >
        <div class="container containerb">
            <br></br>
            <h1 className={"h1b"}>Articles : </h1>
            <hr></hr>
          <div class="row roww">
              {details.map(createCard)}           
          </div>
        </div>
      </div>
        </div>
    )
}

export default Blog
