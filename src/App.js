// import logo from './logo.svg';
import React from 'react';
import Hello from './components/Hello.js';
import './Hello.css';
import Greet from './components/Greet';
import Room from './components/Room';
// function CallFunc(){
//   return(
//     (
//     <h1>its function declaration</h1>,
//     <p>lorem isprem</p>)
//   );
// }
// function App({name,age}) {
//   // let user={name:'shahan mirza', age:27};
//   // let{name,age}=user;
//   return (
//  <div className="App">
// {/* <Greet/> */}
//   <h1>Hello {name} </h1>
//   <div><h2>Age = {age }</h2>
//   <p>React Developer </p></div>
//  </div>);
// }
const App=({name,age})=> <div><h1 className='myname'>Hello {name} its calling by arrow function</h1>
<p id='age'>Age = {age}</p>
<Hello firstName={name} />
<br></br>
<Greet/>
<br></br>
<Room/>
</div>

export default App;