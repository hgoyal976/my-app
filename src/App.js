// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [bgMode, setbgMode] = useState('light');
  const [txtMode, settxtMode] = useState('dark');
  const [btnMode, setbtnMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleDark = () =>{
      setbgMode('dark');
      settxtMode('light');
      setbtnMode('primary')
      document.body.style.backgroundColor = "#000c1f"
      showAlert('Dark mode is enabled', 'success')
      document.title = "TextUtils-Dark mode"
  }
  const toggleLight = () =>{
    setbgMode('light');
      settxtMode('dark');
      setbtnMode('primary')
      document.body.style.backgroundColor = "#F8F9FA"
      showAlert('Light mode is enabled', 'success')
      document.title = "TextUtils-Light mode"

  }
  const toggleGreen = () =>{
    setbgMode('dark');
      settxtMode('light');
      setbtnMode('success')
      
      document.body.style.backgroundColor = "#072e08"
      showAlert('Green mode is enabled', 'success')
      document.title = "TextUtils-Green mode"

  }
  const toggleTheme = {
    toggleDark,
    toggleLight,
    toggleGreen
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" bgMode = {bgMode} txtMode={txtMode} btnMode = {btnMode} toggleTheme = {toggleTheme}/>
      <Alert alert = {alert} />
      <div className="container">
      <Routes>
          <Route path="/about" element={<About bgMode={bgMode} txtMode = {txtMode} btnMode = {btnMode}/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to be analyzed below" showAlert={showAlert} bgMode={bgMode} txtMode = {txtMode} btnMode = {btnMode}/>}>
          
          </Route>
        </Routes>
     
      
      </div>
      </Router>
    </>
  );
}

export default App;
