import React, { useState } from 'react'

function Room()
{
     const [isLit, setLit]= useState(false);
     const [count,setCount]=useState(0);
    return(
        <div>
            This is the room and light is lit : {isLit ? "lit" :"not lit"}
            <br/>
            <input type='button' value='Current state' onClick={
                ()=> setLit(!isLit)
            }/>

            <br/>
            <input type='button' value='Counter' onClick={()=>setCount(count+1)}/>
        <p>Counter : {count}</p>
        <input type='button' value='reset counter' onClick={()=> setCount(0)}/>
        
        </div>
    );
}
export default Room