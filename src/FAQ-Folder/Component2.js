import Select from 'react-dropdown-select' ;
import '../Styles.css'
import { useState } from 'react';
export default function Component2() 
{
    const [selectvalue , setselectfunction] = useState(
          {
            select1:"" 
         } 
        )
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
            Related consultations{" "}
          </h3>

          <hr style={{ margin: "25px" }}></hr>
          {/* <br style={{marginTop:"23px"}} /> */}
          <h4
            style={{
              marginTop: "19px",
              color: "#1f2278ce",
              textAlign: "center",
            }}
          >
            vascular
          </h4>

          <div className="box-one">
            <h5>Attach File </h5>
            <div className="addphoto">
              <div className="card">
                {/* <img  src={photo} className='imgstyle' ></img> */}
                <label for="input -file" className="add-file">
                  Add File
                </label>
                <input
                  type="file"
                  accept="image/jpeg , image/png ,image/jpg  "
                  id="input -file"
                />
              </div>
            </div>
            <h5> The date of the last vascular consultation </h5>
            <input type="date" style={{ width: "30.6rem", height: "2.9REM" }} />
            <h5>The name of the consulter </h5>
            <input type="text" style={{ width: "30.6rem", height: "2.9REM" }} />
            <h5>Need of vascular procedure </h5>
            <select
              style={{
                width: "30.9rem",
                padding: "11PX",
                border: "none",
                background: "white",
              }}
              name="select"
              value={selectvalue.select1}
              onChange={(event) => {
                setselectfunction({
                  ...selectvalue,
                  select1: event.target.value,
                });
              }}
            >
              <option value=""></option>
              <option>Example</option>
              <option>Example </option>
              <option>Example </option>
              <option>Example </option>
            </select>
          </div>

          <div className="box-one" style={{ height: "auto" }}>
            <h5> Other consultation(s) </h5>
            <textarea
              style={{ resize: "none", height: "25rem" }}
              cols={55}
              value="Notes"
            />
          </div>
        </div>
      </>
    );
}




