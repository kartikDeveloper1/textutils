import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light'); //text class
  const[alert,setAlert]=useState(null);
  
  // for showing alerts enabled/disabled
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
  }
//
const[myStyle,setMyStyle]=useState({
  color:"black",
  backgroundColor:"white"
})

const DisableDarkMode=()=>{
    let style={
        color:"black",
        backgroundColor:"white"
    }
    setMyStyle(style);
}
const EnableDarkMode=()=>{
  let style={
      color:"white",
      backgroundColor:"black"
  }
  setMyStyle(style);
}

//function for theme change
  const toggleMode=()=>{              
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='black';
      showAlert("Dark Mode Enabled","success")
      EnableDarkMode();
    }else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light Mode Enabled","success")
      DisableDarkMode();
    }
  }

  return (
    <>
    <Router>
    <Navbar  title="TestUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
      <Route exact path="/about">
        <About mode={mode}  heading="About Us" style={myStyle}/>
      </Route>
      <Route exact path="/textutils">
         <TextFrom heading="Enter The Text To Analyze" mode={mode} /> 
      </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
