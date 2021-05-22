

const Carousel = ({img1, alt1, heading1, content1}) => {
  return ( 
    
    <div className="containerh">
        <img className="d-block w-100 img-responsive" src={img1} alt={alt1}></img>
        <div className="text-block">
            <h4 className={"hh hh4"}>{heading1}</h4>
            <p className={"phead"}>{content1}</p>
        </div>
    </div>
    
   );
}
 
export default Carousel;