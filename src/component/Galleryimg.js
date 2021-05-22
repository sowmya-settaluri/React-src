import React from 'react'
import gallery from '../css/gallery.css'


const Galleryimg = ({image,title}) => {
    return (
        <>
            <div className="col-sm-4 col-md-4 my-rowg">
                        <img className={"imgg"} src={image} alt="Building" width="200" height="200"></img>
                        <h4>{title}</h4>
                    </div>
        </>
    )
}

export default Galleryimg
