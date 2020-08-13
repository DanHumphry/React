import React, { useState } from 'react';
import Navigator from './components/Navigator';
import Banner from './components/Banner';
import './css/Navigator.css';

function App() {
  let [Boolean, ChangeBoolean] = useState(false)
  let [LoginInput, ChangeLoginInput] = useState();

  return (
    <>
      <Navigator Boolean={Boolean} ChangeBoolean={ChangeBoolean}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput}></Navigator>
      <Banner Boolean={Boolean} ChangeBoolean={ChangeBoolean}
      LoginInput={LoginInput} ChangeLoginInput={ChangeLoginInput}></Banner>
    </>
  );
}

export default App;
