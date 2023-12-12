// import Select from 'react-dropdown-select' ;
import '../Styles.css'
import { useState } from 'react';
export default function Coponent1() 
{
    const [selectvalue   , setselectfunction] = useState("")
    const [selectvalue1  , setselectfunction1] = useState("")
    const [selectvalue2  , setselectfunction2] = useState("")
    const [selectvalu3   , setselectfunction3] = useState("")
    const[inputRadiovalue, setinputRadiofunction] = useState(null)
    const [checkboxinput , setheckboxinput] = useState(false)
    const [checkboxinput1 , setheckboxinput1] = useState(false)
    const [checkboxinput2 , setheckboxinput2] = useState(false)

    const handleClick = () => {
      setheckboxinput(!checkboxinput);
    }
    const handleClick1 = () => {
      setheckboxinput1(!checkboxinput1);
    }
    const handleClick2 = () => {
      setheckboxinput2(!checkboxinput2);
    }
    function  SelectChecked()
    {
      return(
        <>
             <select
            style={{
              width: "90%",
              padding: "12px",
              border: "none",
              background: "#a8abffce",
            }}
            name="select"
           >
            <option> Example</option>
            <option> Example </option>
          </select>  
          </>
         )
   }
   function  SelectChecked1()
   {
     return(
       <>
            <select
           style={{
             width: "90%",
             padding: "12px",
             border: "none",
             background: "#a8abffce",
           }}
           name="select"
          >
           <option> Example</option>
           <option> Example </option>
         </select>  
         </>
        )
  }
  function  SelectChecked2()
  {
    return(
      <>
           <select
          style={{
            width: "90%",
            padding: "12px",
            border: "none",
            background: "#a8abffce",
          }}
          name="select"
         >
          <option> Example</option>
          <option> Example </option>
        </select>  
        </>
       )
 }

    return (
      <>
        <div className="oneASKEDQUESTIONS">
          <h3
            style={{
              marginTop: "19px",
              color: "#1f2278ce",
              textAlign: "center",
            }}
          >
            {" "}
            Present Illnes{" "}
          </h3>
          <hr style={{ margin: "25px" }}></hr>
          <div style={{ display: "flex" }}>
            <h1  style={{padding:"20px"}}>R</h1>
            <input
              type="radio"
              name="group2" 
              value= "R"
              checked={inputRadiovalue === "R"}
              onChange={(event) =>{
                setinputRadiofunction(event.target.value)
              }}
             
              style={{ transform: "scale(2.5)", marginLeft: "3px" }}
            />
            <h1 style={{padding:"20px"}}>P </h1>
            <input
              type="radio"
              name="group2"
              value="D"
              checked={inputRadiovalue === "D"}
              onChange={(event) =>{
                setinputRadiofunction(event.target.value)
              }}
              style={{ transform: "scale(2.5)", marginLeft: "3px" }}
            />
          </div>
          <h4 style={{ marginTop: "19px" }}>
            Type (s) of the main lesion 
          </h4>
          <select
            style={{
              width: "39.9rem",
              padding: "11PX",
              border: "none",
              background: "white",
            }}
            name="select"
            value={selectvalue}
            onChange={(event) => {
              setselectfunction(
              event.target.value,);
            }}
          >
            <option value=""></option>
            <option>Example</option>
            <option>Example </option>
            <option>Example </option>
            <option>Example </option>
          </select>
          <h4>Secondary Lesion</h4>
          <select
            style={{
              width: "39.9rem",
              padding: "11PX",
              border: "none",
              background: "white",
            }}
            name="select"
            value={selectvalue}
            onChange={(event) => {
              setselectfunction(
              event.target.value,);
            }}
          >
            <option value=""></option>
            <option>Example</option>
            <option>Example </option>
            <option>Example </option>
            <option>Example </option>
          </select>

          <br style={{ marginTop: "23px" }} />
          <h4 style={{ marginTop: "19px" }}>Notes</h4>
          <textarea
            name="notes"
            rows={3}
            cols={72}
            placeholder=" Write Notes "
            style={{ resize: "none" }}
            value=" "
          />
          <br />
          <h5> Deformity </h5>
          <input type="text" style={{ width: "39.9rem", height: "2.9REM" }} />
          <br />
          {/* */}
          <h5> Position of the lesion </h5>
          <div
            style={{
              display: "flex" ,
              alignItems: "center",
              paddingRight: "3.4rem",
            }}
          >
            <select
              style={{
                width: "40%",
                padding: "12PX",
                marginRight: "10px" ,
                border: "none",
                background: "white",
              }}
              name="select"
              value={selectvalue1}
              onChange={(event) => {
                setselectfunction1(
                event.target.value,);
              }}
            >
              <option value=""> </option>
              <option> Example</option>
              <option> Example </option>
              <option> Example </option>
              <option> Example </option>
            </select>
            <select
              style={{
                width: "40%",
                padding: "12PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value={selectvalue2}
              onChange={(event) => {
                setselectfunction2(
                event.target.value,);
              }}
            >
              <option value=""></option>
              <option> 1</option>
              <option> 2</option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
            </select>
          </div>
          <h5> Suspected Direct Cause (s) of the Lesion </h5>
          <select
            style={{
              width: "39.9rem",
              padding: "12px",
              border: "none",
              background: "white",
            }}
            name="select"
            value={selectvalu3}
            onChange={(event) => {
              setselectfunction3(
              event.target.value,);
            }}
          >
            <option value=""> </option>
            <option> Example</option>
            <option> Example </option>
            <option> Example </option>
            <option> Example </option>
          </select>
          <h5>Attach the current photo of the lesion</h5>
          <div className="addphoto">
            <div className="card">
              <label for="input-file" className="add-file">
                Add File
              </label>
              <input type="file" accept=" " id="input -file" value="" />
            </div>
          </div>

          <h5>Attach the X-ray of the foot</h5>
          <div className="addphoto">
            <div className="card">
              <label for="input-file" className="add-file">
                Add File
              </label>
              <input type="file" accept="file" id="input -file" />
            </div>
          </div>

          <h5>Attachment of the previous culture and sensitivity</h5>
          <div className="addphoto">
            <div className="card">
              <label for="input-file" className="add-file">
                Add File
              </label>
              <input type="file" accept=" " id="input -file" />
            </div>
          </div>
           
          <h5> ABI </h5>
          <input type="number" style={{ width: "39.9rem", height: "2.9REM" }} />
          <h1>Nervous status</h1>
          <div style={{
              background:"white" ,
              marginTop: "30PX",
              width: "40rem",
              borderRadius: "3PX",
              padding:"10px"
            }}
          >
            <p>
              <input type="checkbox" name="option1" checked={checkboxinput} onChange={handleClick}  />
               {checkboxinput ? <div>{SelectChecked()}</div> : null} 
             

            </p>
            <p>
            <input type="checkbox" name="option1" checked={checkboxinput1} onChange={handleClick1}  />
               {checkboxinput1 ? <div>{SelectChecked1()}</div> : null} 
            </p>
            <p>
            <input type="checkbox" name="option1" checked={checkboxinput2} onChange={handleClick2}  />
               {checkboxinput2 ? <div>{SelectChecked2()}</div> : null} 
            </p>
          </div>

          <h5 style={{ margin: "4px 0px -10px 0px " }}> Write Notes</h5>
          <textarea
            name="notes"
            rows={3}
            cols={72}
            placeholder=" Write Notes"
            style={{ resize: "none" }}
          />
          <br />
         <h5> Abnormal Gait </h5>
          <input type="text" style={{ width: "39.9rem", height: "2.9REM" }} />
        </div>
      </>
    );
}

