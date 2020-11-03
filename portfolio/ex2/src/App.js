import './App.css';
import React, {useRef} from 'react'

function App() {
  const inputEl = useRef();

  const handleButtonClick = () => {
      inputEl.current.style.animation = "0.7s ease-in-out 0s 1 testKeyword";
  }

  const handleAnimationEnd = () => {
      inputEl.current.style.animation = "none";
  }


  return (
    <div className="App">
      <input ref={inputEl} onAnimationEnd={handleAnimationEnd} type="text"/>
      <button onClick={handleButtonClick} >Focus the input</button>  
    </div>
  );
}

export default App;
