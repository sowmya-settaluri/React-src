  
import React from 'react'

const Aboutcomp = ({image,title,sub,colour}) => {
    return (
        <>
            <div className="wrapcontainer">
                                <div className="wrapimage">                        
                                   <img src={image} alt=""></img>
                                   <div className="wrapdata">
                                       <div className="wraphead">
                                             <h2 id="heading">{title}</h2>
                                       </div>
                                       <p style={{color: colour, fontSize: '1em'}}>{sub}</p>
                                   </div>
                                </div>
             </div>
        </>
    )
}

const AboutComp = ({image,title,sub}) => {
    return(
        <>
                 <div className="about-page-vision-card">
                          <div className="about-page-vision-card-image">
                               <img src={image} alt=""></img>
                          </div>
                          <div className="about-page-vision-card-text" style={{marginLeft: '1em'}}>
                                 <h4 style={{color: 'white'}}>{title}</h4>
                                 <h6 style={{color: 'hsla(0,0%,100%,.9)'}}>{sub}</h6>
                           </div>
                 </div>
        </>
    )
}

export  {Aboutcomp,AboutComp}
