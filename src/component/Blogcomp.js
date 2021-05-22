import React from 'react'

const Card =(props) =>{
    return (
        <div class="col-lg-4 col-md-6">
        <div class="card ccard mb-4 border-dark bg-secondary text-white shadow-sm">
          
          <img src={props.img} class="card-img-top" alt="dsimage"/>
          <div class="card-body">
            <h4 class="card-text h44">{props.text}</h4>
                <button className={"buttonn"} type="button" class="btn btn-lg btn-dark">Start Reading</button>
          </div>
        </div>
      </div>
    )
}

const Carousel =() =>{
    return(
       
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active ci1">
            <div className="c1">
              <h1 className={"h1b"}>What do you want to learn:</h1>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">Data Science</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">Machine Learning</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">Artificial Intelligence</button>
              <br></br>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">DevOps</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">Microsoft Azure</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">HADOOP</button>
              <br></br>
              
              <a className={"ab"} href="#"><u>--Click here to know more--</u></a>
              
            </div>
          </div>

          <div className="carousel-item ci2" >
            <div className="c1">
            <h1 className={"h1b"}>All the Full-Stack Technologies you need</h1>
            <br></br>
            <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">FULLSTACK Data Science</button>
            <br></br>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">FULLSTACK JAVA DEVELOPER</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">FULLSTACK .NET DEVELOPER</button>
            </div>
          </div>

          <div className="carousel-item ci3" >
            <div className="c1">
                <h1 className={"h1b"}>Programming tutorials</h1>
                <br></br>
                <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">C , C++</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">JAVA</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">PYTHON</button>
              <br></br>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">AngularJS</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">PHP</button>
              <button className={"buttonn"} type="button" className="btn btnn btn-secondary btn-lg">.NET</button>
              <br></br>
                </div>
          </div>
        </div>
        <a className={"ab"} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className={"ab"} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    )
}

export  {Card,Carousel}
