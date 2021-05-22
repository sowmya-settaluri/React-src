/* import 'bootstrap/dist/css/bootstrap.min.css';  */
import Galleryimg from '../component/Galleryimg';
import gallery from '../css/gallery.css'
import Footer from './Footer';
import Navbar from './Navbar';
/*import './styles.css' ;*/

const Gallery=()=>{
    return(
        <div className={"bodygal"}>
            
            <div className="container">


                <blockquote><h3  style={{textAlign: 'center', color:'azure', size: '20px'}}>“Education is the most powerful weapon which you can use to change the world.”
                </h3>
                </blockquote>
  
  
    
                <div className="justify-content-around" id="act">
                    <Galleryimg image={'https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} title={"INSTITUTION"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} title={"CLASSROOM"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} title={"LIBRARY"}/>
                    <Galleryimg image={'https://www.cambridgefilmworks.com/wp-content/uploads/2018/06/C2C.jpg'} title={"LABS"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} title={"DOUBT SESSIONS"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} title={"SEMINARS"}/>
                    <Galleryimg image={'https://tse4.mm.bing.net/th?id=OIP.UDGK2uZR_0YfZZVn3RPokAHaD4&pid=Api&P=0&w=343&h=180'} title={" WORKSHOP"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/7648476/pexels-photo-7648476.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} title={"TRAINING"}/>
                    <Galleryimg image={'https://images.pexels.com/photos/7092334/pexels-photo-7092334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} title={"QUIZ"}/>
                </div>
            </div><br/>
            <div id="more-info">
                <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">More information</button>
                <div id="demo" className="collapse">
                 One of the best institutes where students get explore, learn and experiement!!
            </div>
        </div>
        </div>
    );
}

export default Gallery