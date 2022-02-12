import React from 'react'
import './App.css';
import SupportChat from './SupportChat/index'
import Robot from './robot.png';
import Typing from './Component/Typing'

function App() {
  return (
      <main>
    <div className="main-content">
      <div className="content">
        <h3 className="heading">
         Hi <span className="hello">👋</span> I'm Priye<br/> Chat with me.<br/>Absolutely for free!
        </h3>
        <p>You can <span className="bold uppercase call-to-action"> Connect with me now ! </span></p>
      </div>

      <div className="content-img">
     

    <img src={Robot} />
    <div  className="typing">
    <Typing/>
    </div>
      
      
      </div>
    </div>
    

    <SupportChat/>
  </main>
  
  
  );
}

export default App;
