/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alerts from './components/Alerts';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light'); // whether dark mode is enabled or not 
  const[alert,setAlert]=useState(null);  // alert ek obj hai
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) 
    setTimeout(() => {
        setAlert(null)
    }, 1000);
  } 
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success")
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success")

    }
  }
  return (
    <>
    <Router>
    <Navbar  title="Text-Utils"  aboutText="About Text-Utils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container my-4">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}>
        </Route>
        <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below "my-2  mode={mode}/>}>
        </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App; 
