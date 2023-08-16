import React from 'react'

function Thirdstep({fomData, setFomData}) {
  return (
    <div>
        
     <p>These are the loves of your life. You must see yourself as lucky or blessed<br/>
      to work on those pursuits. It is the kind of work you enjoy. I have concluded that<br/>
      sustainable good success is built on the path of less resistance internally.<br/>
      However, externally, this is not guaranteed; in most cases, it is the opposite.<br/>
      At this stage, include all things you love doing. You may include watching cartoons<br/>
      the whole day at this level if it is one of the things you love to do because it could<br/>
      indicate the underlying potential; however, by the time you answer all 7Qs, you will<br/>
      have narrowed down to things you love to do which help others and they are will to pay<br/>
      for them.You should not only dwell at the moment or present but also search in the past,<br/>
       things you love but were discouraged from doing or lacked opportunities to do.<br/>
        Include activities that get you into the flow.
</p>

           <div style={{color:"maroon"}}>
           <p>To help in answering the question, respond to the following questions:</p>
           <li  style={{border:"none",listStyle:"none"}}>You can be good at several things, but what do you love to do?</li> 
           <li  style={{border:"none",listStyle:"none"}}>What are your passions?</li> 
           <li style={{border:"none",listStyle:"none"}}>What do you have great interest and pleasure in doing?</li> 
           <li  style={{border:"none",listStyle:"none"}}>What are the things that you have the inner energy to pursue?</li> 
           
           </div>

           <div class="mb-3" style={{width:"800px",marginLeft:"500px"}}>
            
             <textarea
              class="form-control" 
              placeholder='thirdAnswer' 
              rows="6" 
              value={fomData.love}
              onChange={(e) => {setFomData({ ...fomData, love: e.target.value });}}>
                
              </textarea>
            </div>
    </div>
  )
}

export default Thirdstep;
