// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route,
//   Link
// } from "react-router-dom";


 
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar  title="TextUtils" About="About Us" mode={mode} toggleMode={toggleMode}/>
     <div className='container my-4'>
      {/* <Routes> */}
          {/* <Route exect path="/About" element={<About/>}/> */}
          {/* <Route exect path="/" element={<TextForm  heading="Enter Some Text" mode={mode}/> }/> */}
          <TextForm  heading="Enter Some Text" mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}
 
export default App;
