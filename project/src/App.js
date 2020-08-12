import React, { useState } from 'react';
import Navigator from './components/Navigator';
import Banner from './components/Banner';
import './css/Navigator.css';

function App() {
  let [Boolean, ChangeBoolean] = useState(false)

  return (
    <>
      <Navigator Boolean={Boolean} ChangeBoolean={ChangeBoolean}></Navigator>
      <Banner Boolean={Boolean} ChangeBoolean={ChangeBoolean}></Banner>
    </>
  );
}

export default App;
