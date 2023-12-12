import { Component, useState } from 'react';
import '../Styles.css';
import photo from './../photos/logos.png';
import Coponent1 from './Coponent1' ;
import Component2 from './Component2' ;
import Copmonent3 from './Copmonent3' ;
import Copmonent4 from './Copmonent4'
import Recommendationcomponent from './Recommendationcomponent';
export default function FAQ()
{
    return(
        <div className='momdiv' >
             <div>
                <h4  style={{color: "#00004465" ,marginTop:"20px"}}>FAQ</h4>
                <hr style={{color: "#1f22786c"}}></hr> 
             </div>   
            <div className="all-ASKEDQUESTIONS" > 
              <h4 id='paragraf'  style={{color: "#1f2278ce" , textAlign:"center"}}>FREQUENTLY ASKED QUESTIONS</h4>
          
      <form> 
         <div className='div-name'> 
            <Coponent1 />
            {/*  */}
            <Component2 />
         </div>
         {/* ============================= */}
         <div className='div-name' > 
            <Copmonent3 />
             {/*  */}
             <Copmonent4 />
             {/*  */}
            
         </div>
         <div className='div-name' > 
           <Recommendationcomponent />
         </div>
     </form>     
   
  </div>
</div>
        
        
        
        
        
        
      
    )
}