export default function Recommendationcomponent() 
{
    return(
        <>
            <div div className="oneASKEDQUESTIONS">
                <h4  style={{marginTop:"19px" ,color: "#1f2278ce" ,textAlign:"center" }}> The plan of management</h4> 
                <hr style={{ margin:"25px"}}></hr>
                <h5>Description of the planned procedure </h5> 
                <input type='text' style={{width:"39.7rem" ,height:"2.9REM"}} />
                <h5>The Joint should be fixed by   </h5> 
                <input type='text' style={{width:"39.7rem" ,height:"2.9REM"}} />
                <h5>The amputation should be </h5>  
                <input type='text' style={{width:"39.7rem" ,height:"2.9REM"}} />

                <h5>Prescription IV </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>
                <h5> The date of the last vascular consultation </h5> 
                <input type='date' style={{width:"39.7rem" ,height:"2.9REM"}} />
                <h5>P The following laboratory tests are required </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
          
            >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>
            </div>
        </>
     )
}
