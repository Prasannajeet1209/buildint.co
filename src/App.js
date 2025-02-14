import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const change = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "Project-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "Project-Light Mode";
    }
  }

  return (
    <>
     
        <Navbar title="Text" mode={mode} change={change} />
        <Alerts alert={alert} />
        <div className="container">
        
              <TextForm heading="Enter the Text to Process" mode={mode} showAlert={showAlert} />
        </div>
      
    </>
  );
}

export default App;
