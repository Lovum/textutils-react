// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

 function App() {
  const [mode, setMode] = useState("light") //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
       if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = 'grey';
         showAlert("Dark mode has been enabled", "success");
         document.title = "TextUtils - Dark Mode"

        //  setInterval(() => {
        //   document.title = "TextUtils is Amazing"
        //  }, 2000);
        //  setInterval(() => {
        //   document.title = "TextUtils instal now"
        //  }, 1500);
       }
       else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("Light mode has been enabled", "success")
         document.title = "TextUtils - Light Mode"
       }
  }  
  return (
  <>
    {/* <Navbar title= "textUtils" aboutText= "About TextUtils"/> */}
  {/* <Router> */}
    <Navbar title= "textUtils" mode ={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
      {/* /users --> Component 1
          /users/Home --> Component 2 */}
          {/* <Route exact path='/about' element={ <About/>}>   
          </Route>    */}
          {/* <Route exact path='/' element={ <Textform showAlert={showAlert}heading="Enter the text to analyze below" mode ={mode}/>}>  */}
          <Textform showAlert={showAlert}heading="Enter the text to analyze below" mode ={mode}/>
          {/* </Route>  */}
    {/* </Routes>   */}
    </div>
  {/* </Router> */}
  </>  
  );
}

export default App;
