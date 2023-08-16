import React from 'react'

function Sixthstep({fomData, setFomData}) {
  return (
    <div>
        
     <p>State not just the output but the outcome, which is the impact of your action.<br/>
      The answer to why you do what you do should be inbuilt into the impact you want to<br/>
      create. Personally, I inspire individuals and organisations to live meaningful lives.<br/>
      inspire my beneficiaries through training and advisory, and as a result, they live<br/>
      meaningful lives. The beneficiaries transform from pursuing anything they can to pursuing<br/>
      what impacts society and fulfils them.</p>

           <div style={{color:"maroon"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li style={{border:"none",listStyle:"none"}}>What is the output of your interventions?</li> 
           <li  style={{border:"none",listStyle:"none"}}>Which group do you uniquely understand its struggles?</li> 
          
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
           
             <textarea 
             class="form-control" 
             placeholder='sixthAnswer'
              rows="6" 
              value={fomData.transform}
              onChange={(e) => {setFomData({ ...fomData, transform: e.target.value });}}>
                
              </textarea>
            </div>
    </div>
  )
}

export default Sixthstep;
