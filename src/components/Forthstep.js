import React from 'react'

function Forthstep({fomData, setFomData}) {
  return (
    <div>
        
     <p>Name your beneficiaries. Find your community. You may serve the whole world,<br/>
      but like Apple, which serves a 'think different' or creative community, you must<br/>
       have your own core group. Just because you can write doesn't mean you can write for<br/>
       all age groups. There is a group you can serve better than your peers, so you choose<br/>
       that group, although it is the group that chooses you. Whichever way you look at it,<br/>
       you and the group must understand each other well. Another example is if you sell<br/>
       homes, many people need to own a home, but not all need a high-end home; some need a<br/>
       low-cost home. If you are in this space, you must pick a group you are passionate about<br/>
       serving.</p>

           <div style={{color:"maroon"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li style={{border:"none",listStyle:"none"}}>Who is your core constituency?</li> 
           <li style={{border:"none",listStyle:"none"}}>Which group do you uniquely understand its struggles?</li> 
           <li style={{border:"none",listStyle:"none"}}>Which people, groups, or things/animals/environment do you enjoy serving?</li> 
           <li style={{border:"none",listStyle:"none"}}>Do they enjoy being served by you?</li> 
           
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
            
             <textarea 
             class="form-control" 
             placeholder='forthAnswer' 
             rows="6" 
             value={fomData.serve}
             onChange={(e) => {setFomData({ ...fomData, serve: e.target.value });}}>

             </textarea>
            </div>
    </div>
  )
}

export default Forthstep
