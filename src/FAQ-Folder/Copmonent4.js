import Select from 'react-dropdown-select' ;
import '../Styles.css'
export default function Copmonent4() 
{
    return(
        <>
        <div className="oneASKEDQUESTIONS">
            <h4  style={{marginTop:"19px" ,color: "#1f2278ce" ,textAlign:"center" }}>Follow up </h4> 
            <h5>Follow up on time ? </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value=""
            >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>   
            <h5>The compliance of the patient with the dressing, recommendation, etc… </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value=""
            >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>  

            <h5>Outcome of the previous visiting management </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value=""
            >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>   

            <h5>The suspected causes of the regression </h5>  
                <select
              style={{
                width: "39.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value=""
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