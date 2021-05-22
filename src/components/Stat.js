const Stat = ({count, content}) => {
  return ( 
    <div className="statistics">
      
					<p className="stat_count">{count}</p>
					<h3  style={{ fontSize: "30px"}}>{content}</h3>
				</div>
   );
}
 
export default Stat;