import '../Styles.css'
import Select from 'react-dropdown-select'
import photo from './../photos/logos.png'
import { useState } from 'react'
export default function FAQ()
{
  const [value , setfaqinput] = useState('')

    return(
        <div className='momdiv' >
             <div    >
                <h4  style={{color: "#00004465" ,marginTop:"20px"}}>FAQ</h4>
                <hr style={{color: "#1f22786c"}}></hr> 
             </div>   
        
            <div className="all-ASKEDQUESTIONS" > 
            
              <h4 id='paragraf'  style={{color: "#1f2278ce" , textAlign:"center"}}>FREQUENTLY ASKED QUESTIONS</h4>
              <form     > 
              <div   style={{ display:"flex" ,justifyContent:"center"}}>
               <div className="oneASKEDQUESTIONS">
                     <h4  style={{marginTop:"19px" ,color: "#1f2278ce" ,textAlign:"center" }}> Present Illnes<h1 class="heading"> </h1>
                     </h4> 
                       <hr style={{ margin:"25px"}}></hr>
                       <h4  style={{marginTop:"19px"   }}>Type (s) of the main lesion at presentation</h4> 
                       <select    style={{width: "90%" ,padding:"12px" , border:"none" , background:"white"}} name ="select"  >
                           <option value="">  </option>
                           <option> uigsufaus;idsahuifaoh'iha'sofh'soihfs </option>
                           <option> uigsufaus;idsahuifaoh'iha'sofh'soihfs </option>
                           <option> uigsufaus;idsahuifaoh'iha'sofh'soihfs </option>
                           <option> uigsufaus;idsahuifaoh'iha'sofh'soihfs </option>
                           <option> uigsufaus;idsahuifaoh'iha'sofh'soihfs </option>
                      </select> 
    <br style={{marginTop:"23px"}} />

    <fieldset   >
        <label>
          <input type="radio" name="group2" value="option1" /> Option 1
        </label>
        <label>
          <input type="radio" name="group2" value="option2"/> Option 2
        </label>
        <label>
          <input type="radio" name="group2" value="option3"/> Option 3
        </label>
    </fieldset>
    <textarea  name='notes' rows={4} cols={62}  placeholder=' Write Notes' > </textarea>
        <br />
        <h5> Deformity </h5>  
        <input type='text' style={{width:"34.6rem" ,height:"2.9REM"}} />
        <br />
        {/* */}
        <h5> Position of the lesion </h5>  
       
          <div  style={{display:"flex" ,justifyContent:"center" ,alignItems:"center", paddingRight:"3.4rem" }} >
            <select    style={{width: "70%", padding:"12PX" , border:"none" , background:"white" }} name='select' value={value}  onChange={event=>setfaqinput(...value,event.target.value)} >
                                      <option value="">  </option>
                                      <option> dfauihvifauhaiu </option>
                                      <option> dfisghudfshgodf </option>
                                      <option> fiufrehoijofirj </option>
                                      <option> fdjiudoinhodfii </option>
            </select> 
            <select    style={{width: "50%" ,padding:"12px" , border:"none" , background:"white",marginLeft:"40px"  }} name='select' value={value}  onChange={event=>setfaqinput(...value, event.target.value)}  >
                                      <option value="">  </option>
                                      <option > 1 </option>
                                      <option> 2 </option>
                                      <option> 3 </option>
                                      <option> 4 </option>
            </select> 
        </div>
         <h5> Suspected Direct Cause (s) of the Lesion </h5>  
          <select    style={{width: "90%" ,padding:"12px" , border:"none" , background:"white"}} name='select'  >
                                  <option value="">  </option>
                                  <option>  joijpijp;oj</option>
                                  <option> kkkkkkkkkkkk </option>
                                  <option> hhhhhhhhhhhh </option>
                                  <option> jjjjjjjjjjjj </option>
        </select> 
        <h5>Attach the current photo of the lesion</h5>
        <div className='addphoto'> 
            <div className='card'>
              <label  for="input -file"  className='add-file'>Add File</label>
              <input type='file' accept=' ' id="input -file"  />
            </div>
        </div>
 
        <h5>Attach the X-ray of the foot</h5>
        <div className='addphoto'> 
            <div className='card'>
              <label  for="input -file"  className='add-file'>Add File</label>
              <input type='file' accept='file' id="input -file"  />
            </div>
        </div>

        <h5>Attachment of the previous culture and sensitivity</h5>
        <div className='addphoto'> 
            <div className='card'>
              <label  for="input -file"  className='add-file'>Add File</label>
              <input type='file' accept=' ' id="input -file"  />
            </div>
        </div>
        <h5 style={{ margin:"4px 0px -10px 0px "}}> Write Notes</h5>
        <textarea  name='notes'   rows={2,2} cols={61} placeholder=' Write Notes' > </textarea>
        <br />
         
                 
        </div>
   
      {/* pppppppppppppppppppppppppppppppppppppppppppppppppppppp */}

      < div className="oneASKEDQUESTIONS">
         <h4  style={{marginTop:"19px" ,color: "#1f2278ce" ,textAlign:"center" }}> Related consultations </h4> 
        
        <hr style={{ margin:"25px"}}></hr>
        {/* <br style={{marginTop:"23px"}} /> */}
        <h4 style={{marginTop:"19px" ,color: "#1f2278ce" ,textAlign:"center" }}>vascular</h4>
  
        <div  className='box-one'  >  
          <h5>Attach File </h5>  
          <div className='addphoto'>          
            <div className='card'>
            {/* <img  src={photo} className='imgstyle' ></img> */}
              <label  for="input -file"  className='add-file'>Add File</label>
              <input type='file' accept='image/jpeg , image/png ,image/jpg  ' id="input -file"  /> 
            </div>
          </div>
              <h5> The date of the last vascular consultation </h5> 
              <input type='date' style={{width:"30.6rem" ,height:"2.9REM"}} />
              <h5>The name of the consulter </h5>  
        <input type='text' style={{width:"30.6rem" ,height:"2.9REM"}} />
        <h5>Need of vascular procedure </h5> 
        <select    style={{width: "90%" ,padding:"12px" , border:"none" , background:"white"}} name='select'  >
                                  <option value="">  </option>
                                  <option>  joijpijp;oj</option>
                                  <option> kkkkkkkkkkkk </option>
                                  <option> hhhhhhhhhhhh </option>
                                  <option> jjjjjjjjjjjj </option>
        </select> 

        </div>

   
        </div>
      </div>
      </form>     

     </div>

</div>
        
        
        
        
        
        
      
    )
}