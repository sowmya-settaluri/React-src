import React from 'react';
import CourseButtons from './CourseButtons';
import './courseStyles.css';
import Course from './Coursedetail';

/*Main component (CoursePage)*/
class CoursePage extends React.Component{
    render(){
        return (        
            <div>
                <div className="boddy" >
                     
                    <h1 className="ml-4 h111">Technology & Development</h1>
                    <h1 className="ml-4 h111">All Technology & Development Courses</h1>
                    <br/>                   
                    <CourseButtons />
                    <Course />
                    
                </div>                  
            </div> 
    );

    }
}

export default CoursePage;