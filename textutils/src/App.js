import Navbar from './componants/Navbar';
import './App.css';
import TextForm from './componants/TextForm';
// import About from './componants/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  // const [text, setText] = useState('light');
  const toggleMode = () => {
    // (mode == 'light') ? (setMode('dark')(document.body.style.backgroundColor = 'black')) : setMode('light');
    // (text == 'light') ? setText('dark') : setText('light');
    if(mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
