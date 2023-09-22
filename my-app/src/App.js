import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import React from 'react'
import TextForm from './components/TextForm';
import React ,{useState} from 'react';


function App() {
  const [mode,setMode]=useState('light');// dark 
  const togglemode=()=>{
    if (mode==='dark') {setMode('light');
  document.body.style.backgroundColor='white';
  }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
  }
    return (
    <>   
   
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
  <div className='container my-3' >
  <TextForm heading="Enter the text to analyze" mode={mode}/>
  </div>
  {/* <About/> */}
  
  
    </>
    );
  }
  
  export default App;