import React from 'react';

class CourseButtons extends React.Component{
    render(){
        return(
            <div>

                <div className=" text-center pr-2 pr-2" id="buttonss" >
                        
                        <button className="btn btn-sm btn-warning mr-1"><a href="#1" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>1</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#2" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>2</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#3" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>3</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#4" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>4</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#5" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>5</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#6" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>6</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#7" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>7</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#8" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>8</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#9" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>9</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#10" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>10</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#11" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>11</a></button>
                        <button className="btn btn-sm btn-warning mr-1"><a href="#12" className="text-dark" style={{textDecoration:"none",fontWeight:"bolder"}}>12</a></button>
                </div>
                <h3 id="sc" className="text-center text-light">Or scroll courses</h3>
            </div>
        );
    }
}

export default CourseButtons;