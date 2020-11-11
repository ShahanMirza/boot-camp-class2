import React from 'react'
function Greet(){
    // textBox()
 return <div>
 <h1>Sign up Form</h1>,   
 <form>
     <label>
         First Name:
     <input type='text' name='name'/>
     </label>
     <br/>
     <label>
         Last Name:
         <input type='text' name='lastName'/>
     </label>
     <br/>
     <input type='submit' value='Submit'/>
 </form>
 </div>
 }

// function textBox(){
//     <form>
//         <label>
//             Name:
//         <input type='text' name='name'/>
//         </label>
//         <input type='submit' value='Submit'/>
//     </form>
// }

// export const Greet= () => <h1>Hello from Greet using arrrow function </h1>
 export default Greet