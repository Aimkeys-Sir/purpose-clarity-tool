import React from 'react'

function Seventhstep({fomData, setFomData}) {
  return (
    <div>
       
     <p>Without this question, all the other questions lead to a hobby, and with only<br/>
      this ques- tion, you may end up as an unfulfilled ruthless money-making machine.<br/>
      This question gives you a vocation and multiplies the impact you can make.</p>

           <div style={{color:"maroon"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li  style={{border:"none",listStyle:"none"}}> What are the beneficiaries willing and able to pay for, and how much?</li> 
           <li  style={{border:"none",listStyle:"none"}}>Are the payments enough to maintain a going concern?</li> 
          
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
            
             <textarea 
             class="form-control" 
             placeholder='seventhAnswer' 
             rows="6" 
             value={fomData.income}
             onChange={(e) => {setFomData({ ...fomData, income: e.target.value });}}>
                
             </textarea>
            </div>
    </div>
  )
}

export default Seventhstep;
