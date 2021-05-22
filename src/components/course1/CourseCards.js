import React from 'react';

const CourseCards=({cardnum,cimg,num,title1,title2,timg,trainer,cost,summary,explore})=>{
    return (
        <> 
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6  col-12" id={cardnum} >
            <div className="card card-blockk cardd-1 p-1 main2" >
                        <img className="courseImg" src={cimg}  alt="devpic" style={{height:"195px"}}/>
                        <h2><button className="btn btn-sm btn-dark text-light" style={{fontWeight:"bolder"}}>{num}</button>{title1}</h2>
                        <h2>{title2}</h2>
                        <br/>
                        <div className="row">
                            <div className="col-8"><h5 style={{fontFamily:"Arial Narrow"}}><img style={{borderRadius:"50%",height:"40px",width:"40px"}}  src={timg} alt="profile_icon"  className="img-rounded" /> {trainer}</h5></div>
                            <div className="col-4"><h2 className="text-right text-danger fa fa-inr" style={{fontSize:"larger",fontWeight:"bolder"}}>{cost}</h2></div>
                        </div>
                        <br/>
                        <h5 >{summary}</h5>
                        <br/>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary w-50"><a href={explore} target="_blank" style={{textDecoration:"none",color:"white",fontSize:"larger",fontWeight:"bold"}}>Explore</a></button>
                        </div>
                        <br/>
                        <br/>
                        <br/>
            </div>
            </div>
        </>
       );
}

export default CourseCards;
