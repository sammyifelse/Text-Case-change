import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   // Link,
//   // BrowserRouter
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" ,"Success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="TextAbouts" mode={mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-4" mode={mode}>
    {/* <Routes> */}
      {/* exact is important  */}
          {/* <Route exact path="/about" element={<About/>}>
          </Route> */}
          {/* <Route exact path="/"  */}
          <TextForm  showAlert={showAlert} heading="Enter the text to change to UpperCase" mode={mode}/>
          {/* </Route> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
